<template>
  <section v-if="booking" class="booking-detail">
    <button
     @click="$router.back"
      class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
    >
      Back to overview
    </button>
    <section class="details">
      <h2 class="text-2xl font-bold">Booking Details</h2>
      <p>Name: </p>
      <address>{{ booking.customerName }}</address>
      <p>Booking from / to: </p>
      <time>From / To: {{ startDate }} - {{ endDate }}</time>
      <p>Pickup Station: </p>
      <address>{{ pickupReturnStationName }}</address>
    </section>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import { Booking } from "../api/typings";
import moment from "moment";

const props = defineProps<{
  stationId: string;
  bookingId: string;
}>();

const store = useStore();

const booking = computed<Booking>(() => store.getters.getBookingDetails);

const startDate = computed(() => {
  return moment(booking.value.startDate).format("Do MMM YYYY HH:mm");
});

const endDate = computed(() => {
  return moment(booking.value.endDate).format("Do MMM YYYY HH:mm");
});

const pickupReturnStationName = computed(() =>
  store.getters.getStationNameById(props.stationId)
);

onMounted(() => {
  const stations = store.getters.getStations;
  if (!stations) {
    store.dispatch("requestStations");
  }
  const { stationId, bookingId } = props;
  store.dispatch("fetchBookingDetails", {
    stationId,
    bookingId,
  });
});
</script>

<style scoped lang="scss">
.booking-detail {
  padding: 2rem;
}
.details {
  margin-top: 30px;
  h2 {
    padding: 10px 0px;
  }
  p {
    margin-top: 6px;
    font-weight: 700;
  }
  address {
    text-decoration: none;
    font-style: normal;
  }
}
</style>
