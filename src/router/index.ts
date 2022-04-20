import { createRouter, createWebHistory } from 'vue-router';
import BookingOverview from '../pages/BookingOverview.vue';
import BookingDetails from '../pages/BookingDetails.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', redirect: '/bookings' },
      { name: 'booking-overview', path: '/bookings', component: BookingOverview },
      { path: '/stations/:stationId/bookings/:bookingId', component: BookingDetails, props: true },
      { path: '/vue-calendar-week/', redirect: '/vue-calendar-week/bookings' },
      { name: 'booking-overview', path: '/vue-calendar-week/bookings', component: BookingOverview },
      { path: '/vue-calendar-week/stations/:stationId/bookings/:bookingId', component: BookingDetails, props: true },
    ]
  });

  export default router;