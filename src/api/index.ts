import { Station, Booking } from "./typings";
const API_BASE_URL = "https://605c94c36d85de00170da8b4.mockapi.io/stations";

export const getStations = async (): Promise<Station[]> => {
  const response = await fetch(API_BASE_URL);
  const data = await response.json();
  return data;
};

export const getBookingDetails = async (stationId: number, bookingId: number): Promise<Booking> => {
  const response = await fetch(`${API_BASE_URL}/${stationId}/bookings/${bookingId}`);
  const data = await response.json();
  return data;
};

export const getStationById = async (id: number): Promise<Station> => {
  const response = await fetch(`${API_BASE_URL}`);
  const data = await response.json();
  const station = data.find((station: Station) => station.id === id);
  return station;
};


