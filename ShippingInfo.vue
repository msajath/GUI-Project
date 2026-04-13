<template>
  <div class="container mx-auto px-4 py-12">
    <div class="max-w-2xl mx-auto">
      <h1 class="text-4xl font-bold mb-8">Shipping Information</h1>
      
      <!-- Shipping Rates -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold mb-4">Shipping Rates</h2>
        <div class="space-y-4">
          <div class="bg-white p-6 rounded-lg border border-gray-200">
            <h3 class="font-semibold text-lg mb-2">Standard Shipping</h3>
            <p class="text-gray-600 mb-2">Delivery: 5-7 business days</p>
            <p class="text-gray-600">Cost: FREE on orders over $50 | $9.99 otherwise</p>
          </div>
          <div class="bg-white p-6 rounded-lg border border-gray-200">
            <h3 class="font-semibold text-lg mb-2">Express Shipping</h3>
            <p class="text-gray-600 mb-2">Delivery: 2-3 business days</p>
            <p class="text-gray-600">Cost: $19.99</p>
          </div>
          <div class="bg-white p-6 rounded-lg border border-gray-200">
            <h3 class="font-semibold text-lg mb-2">Overnight Shipping</h3>
            <p class="text-gray-600 mb-2">Delivery: Next business day</p>
            <p class="text-gray-600">Cost: $39.99</p>
          </div>
        </div>
      </section>

      <!-- Processing Time -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold mb-4">Processing Time</h2>
        <p class="text-gray-700 mb-4">
          All orders are processed within 1-2 business days. Orders placed on weekends or holidays will be processed on the next business day.
        </p>
      </section>

      <!-- Delivery Areas -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold mb-4">Where We Ship</h2>
        <p class="text-gray-700 mb-4">
          We ship to all 50 US states and many international destinations. Shipping costs and delivery times vary by location.
        </p>
      </section>

      <!-- Tracking -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold mb-4">Package Tracking</h2>
        <p class="text-gray-700 mb-4">
          Every order includes a tracking number. You'll receive an email with your tracking information once your package ships. You can use this number to monitor your delivery status in real-time.
        </p>
      </section>

      <!-- Additional Info -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold mb-4">Important Notes</h2>
        <ul class="list-disc list-inside text-gray-700 space-y-2">
          <li>Delivery dates are estimates and not guaranteed</li>
          <li>We are not responsible for delays caused by carrier issues</li>
          <li>Signature may be required for items over $500</li>
          <li>Please ensure your address details are correct before checkout</li>
        </ul>
      </section>

      <!-- Back Button -->
      <router-link 
        to="/" 
        class="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
      >
        ← Back to Home
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
// Shipping information page component
</script>
