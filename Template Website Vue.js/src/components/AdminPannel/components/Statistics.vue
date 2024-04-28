<script setup lang="ts">
  import { useAdminPannelStore } from '@/stores/admin_pannel';
  import { computed } from 'vue';
  import type { User } from '@/stores/types/User';
  
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
</template>
  
<style scoped>
  .statistics {
    position: relative;
    top: -3.1rem;
    margin-top: 20px;
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
</style>
  