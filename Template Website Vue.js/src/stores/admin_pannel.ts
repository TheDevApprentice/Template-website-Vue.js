import { defineStore } from "pinia";
import type { SummaryStatistics, User } from "./types/User";

function generateRandomName() {
  const names = ['John', 'Jane', 'Alice', 'Bob', 'Charlie', 'Emma', 'David', 'Olivia', 'Sophia', 'Liam'];
  const surnames = ['John', 'Jane', 'Alice', 'Bob', 'Charlie', 'Emma', 'David', 'Olivia', 'Sophia', 'Liam'];
  const randomIndex = Math.floor(Math.random() * names.length);
  const randomSurnameIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
}

function generateRandomSurname() {
  const surnames = ['John', 'Jane', 'Alice', 'Bob', 'Charlie', 'Emma', 'David', 'Olivia', 'Sophia', 'Liam'];
  const randomSurnameIndex = Math.floor(Math.random() * surnames.length);
  return surnames[randomSurnameIndex];
}

function generateRandomEmail() {
  const domains = ['example.com', 'test.com', 'demo.com', 'domain.com'];
  const randomIndex = Math.floor(Math.random() * domains.length);
  const randomName = generateRandomName().toLowerCase();
  return `${randomName}.${Math.floor(Math.random() * 100)}@${domains[randomIndex]}`;
}

function generateRandomStatistics() {
  const statistics: Record<string, { loginCount: number, postCount: number, commentCount: number }> = {};
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  months.forEach(month => {
    statistics[month] = {
      loginCount: Math.floor(Math.random() * 100),
      postCount: Math.floor(Math.random() * 50),
      commentCount: Math.floor(Math.random() * 200)
    };
  });
  return statistics;
}

function generateRandomSummaryStatistics() {
  return {
    totalLoginCount: Math.floor(Math.random() * 1000),
    totalPostCount: Math.floor(Math.random() * 500),
    totalCommentCount: Math.floor(Math.random() * 2000)
  };
}

export const useAdminPannelStore = defineStore({
  id: 'admin',

  state: () => ({
    users: [] as User[],
    usersFetched: false,
    summaryStatistics: {} as SummaryStatistics,
    searchQuery: '',
    filteredUsers: [] as User[],
  }),

  actions: {
    addUsers(newUsers: User[]) {
      this.users.push(...newUsers);
    },
    async fetchUsers() {
      if (!this.usersFetched) {
        function createUser() {
          const id = Math.floor(Math.random()) + 1;
          const name = generateRandomName();
          const surname = generateRandomSurname();
          const email = generateRandomEmail();
          const userType = ['admin', 'moderator', 'user'][Math.floor(Math.random() * 3)];
          const statistics = generateRandomStatistics();
          return { id, name, surname, email, userType, statistics };
        }
        function createUniqueUsers(count: number) {
          const users = [];
          const uniqueEmails = new Set();
          while (users.length < count) {
            const user = createUser();
            if (!uniqueEmails.has(user.email)) {
              users.push(user);
              uniqueEmails.add(user.email);
            }
          }
          return users;
        }
        const newUsers = createUniqueUsers(100);
        this.addUsers(newUsers);
        this.usersFetched = true;
      }
    },
    updateSearchQuery(query: string) {
      this.searchQuery = query;
      this.updateFilteredUsers();
    },
    updateFilteredUsers() {
      if (this.searchQuery.trim() === '') {
        this.filteredUsers = this.users;
      } else {
        this.filteredUsers = this.users.filter(user =>
          user.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          user.email.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }
      console.log('Filtered Users:', this.filteredUsers);
    },
    generateSummaryStatistics() {
      const summaryStatistics = {
        totalLoginCount: 0,
        totalPostCount: 0,
        totalCommentCount: 0
      };
    
      this.users.forEach(user => {
        summaryStatistics.totalLoginCount += user.statistics.loginCount;
        summaryStatistics.totalPostCount += user.statistics.postCount;
        summaryStatistics.totalCommentCount += user.statistics.commentCount;
      });
    
      this.summaryStatistics = summaryStatistics;
    }, 
  },
});
const adminStore = useAdminPannelStore();
adminStore.fetchUsers();
adminStore.generateSummaryStatistics(); 