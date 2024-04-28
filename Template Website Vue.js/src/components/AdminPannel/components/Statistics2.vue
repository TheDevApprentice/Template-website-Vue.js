<script setup lang="ts">
  import { useAdminPannelStore } from '@/stores/admin_pannel';
  import { computed } from 'vue';
  import type { User } from '@/stores/types/User';
  import BarChart from '../components/Statistics/bar/BarChart.vue';

  const adminStore = useAdminPannelStore();

  const totalUsers = computed(() => adminStore.users.length);
  const totalLogins = computed(() => {
    return adminStore.users.reduce((acc: number, user: User) => acc + user.statistics.loginCount, 0);
  });
  const totalPosts = computed(() => {
    return adminStore.users.reduce((acc: number, user: User) => acc + user.statistics.postCount, 0);
  });
  const totalComments = computed(() => {
    return adminStore.users.reduce((acc: number, user: User) => acc + user.statistics.commentCount, 0);
  });

  const months = computed(() => [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]);

  const userData = computed(() => {
    return {
      labels: months.value,
      datasets: [{
        label: 'User Data',
        data: [totalUsers.value]
      }]
    };
  });

  const loginData = computed(() => {
    return {
      labels: months.value,
      datasets: [{
        label: 'Login Data',
        data: [totalLogins.value]
      }]
    };
  });

  const postData = computed(() => {
    return {
      labels: months.value,
      datasets: [{
        label: 'Post Data',
        data: [totalPosts.value]
      }]
    };
  });

  const commentData = computed(() => {
    return {
      labels: months.value,
      datasets: [{
        label: 'Comment Data',
        data: [totalComments.value]
      }]
    };
  });
</script>

<template>
  <div class="statistics">
    <div class="statistic-container">
      <div class="statistic">
        <div class="statistic-value">{{ totalUsers }}</div>
        <div class="statistic-label">Total Users</div>
      </div>
      <div class="statistic">
        <div class="statistic-value">{{ totalLogins }}</div>
        <div class="statistic-label">Total Logins</div>
      </div>
      <div class="statistic">
        <div class="statistic-value">{{ totalPosts }}</div>
        <div class="statistic-label">Total Posts</div>
      </div>
      <div class="statistic">
        <div class="statistic-value">{{ totalComments }}</div>
        <div class="statistic-label">Total Comments</div>
      </div>
    </div>
  </div>
  <main class="chart-container">
    <div class="chart">
      <BarChart :chartData="userData" :chartLabels="months" />
    </div>
    <div class="chart">
      <BarChart :chartData="loginData" :chartLabels="months" />
    </div>
  </main>
</template>

<style scoped>
.chart {
  margin-bottom: 2rem;
}

.chart-container {
  display: grid;
  grid-template-columns: repeat(1, 0.5fr);
  gap: 0.2rem;
}

.statistics {
  position: relative;
  top: -3.1rem;
  margin-top: 20px;
  height: 20vh;
}

.statistic-container {
  display: flex;
  margin-top: 2rem;
}

.statistic {
  margin-right: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f8f8f8;
}

.statistic-value {
  font-size: 18px;
  font-weight: bold;
}

.statistic-label {
  font-size: 14px;
  color: #666;
}
.chart-container {
  display: grid;
  grid-template-columns: repeat(2, 0.5fr);
  gap: 0.2rem;
}

@media screen and (max-width: 768px) {
  .chart-container {
    grid-template-columns: 0.5fr;
  }
}
</style>
