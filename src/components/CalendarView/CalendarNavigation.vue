<template>
  <section>
    <div class="inline-flex">
      <button
        @click="setPreviousWeek"
        class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
      >
        Prev
      </button>
      <button
        @click="setNextWeek"
        class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
      >
        Next
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import moment from "moment";

const router = useRouter();
const route = useRoute();
const store = useStore();

function setNextWeek() {
  const currentStartOfWeek = store.getters.getFromDate;
  const nextStartOfWeek = moment(currentStartOfWeek).add(7, "days");
  const currentEndOfWeek = store.getters.getToDate;
  const nextEndOfWeek = moment(currentEndOfWeek).add(7, "days");
  store.commit("SET_WEEK", {
    fromDate: nextStartOfWeek,
    toDate: nextEndOfWeek,
  });
  const stationId = route.params.stationId || store.getters.getStationId;
  router.push({
    name: "bookings",
    query: {
      stationId,
      from: nextStartOfWeek.format("YYYY-MM-DD"),
      to: nextEndOfWeek.format("YYYY-MM-DD"),
    },
  });
}

function setPreviousWeek() {
  const currentStartOfWeek = store.getters.getFromDate;
  const previousStartOfWeek = moment(currentStartOfWeek).subtract(7, "days");
  const currentEndOfWeek = store.getters.getToDate;
  const previousEndOfWeek = moment(currentEndOfWeek).subtract(7, "days");
  store.commit("SET_WEEK", {
    fromDate: previousStartOfWeek,
    toDate: previousEndOfWeek,
  });
  const stationId = route.params.stationId || store.getters.getStationId;
  router.push({
    name: "bookings",
    query: {
      stationId,
      from: previousStartOfWeek.format("YYYY-MM-DD"),
      to: previousEndOfWeek.format("YYYY-MM-DD"),
    },
  });
}
</script>
