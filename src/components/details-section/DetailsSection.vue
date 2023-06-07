<template>
  <div class="details-section">
    <div class="header">{{ headerValue }}</div>
    <div class="content">
      <slot name="content"></slot>
    </div>
    <div class="footer">
        <div class="cc">
          <span class="text">{{ footerValue }}<i class="iconfont icon-jiantou"></i></span>
        </div>
    </div>
  </div>
</template>

<script setup>
  defineProps({
    headerValue: {
      type: String,
      default: " ",
    },
    footerValue: {
      type: String,
      default: " ",
    },
  });
</script>

<style scoped>
    .details-section {
        border-top: 5px solid #f1f3f5;
        background-color: #fff;
    }
  .header {
    padding: 14px 16px;
    border: solid 2px var(--grey-color);
    font-size: 20px;
    font-weight: 600;
  }
  .content,
  .footer {
    padding: 15px 16px;
  }
  .footer,i {
    position: relative;
    color: var(--deep-blue-color);
  }
  .cc {
    height: 1rem;
  }
  .text {
    position: absolute;
    right: 10px;
  }
  

</style>
