import { createRouter, createWebHistory } from 'vue-router';
import BookingOverview from '../pages/BookingOverview.vue';
import BookingDetails from '../pages/BookingDetails.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
      // dev only
      { name: 'home', path: '/', redirect: '/bookings' },
      { name: 'bookings', path: '/bookings', component: BookingOverview },
      { name: 'details', path: '/stations/:stationId/bookings/:bookingId', component: BookingDetails, props: true },
      // production mode
      // { name: 'home', path: '/vue-calendar-week/', redirect: '/vue-calendar-week/bookings' },
      // { name: 'bookings', name: 'booking-overview', path: '/vue-calendar-week/bookings', component: BookingOverview },
      // { name: 'details', path: '/vue-calendar-week/stations/:stationId/bookings/:bookingId', component: BookingDetails, props: true },
    ]
  });

  export default router;