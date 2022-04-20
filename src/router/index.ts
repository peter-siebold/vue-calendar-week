import { createRouter, createWebHistory } from 'vue-router';
import BookingOverview from '../pages/BookingOverview.vue';
import BookingDetails from '../pages/BookingDetails.vue';

type MODE = 'development' | 'production';
const mode: MODE = "production";

const router = createRouter({
    //@ts-ignore
    history: createWebHistory(mode === "production" ? "/vue-calendar-week" : "/"),
    routes: [
      // dev only
      { name: 'home', path: '/', redirect: '/bookings' },
      { name: 'bookings', path: '/bookings', component: BookingOverview },
      { name: 'details', path: '/stations/:stationId/bookings/:bookingId', component: BookingDetails, props: true },
    ]
  });

  export default router;