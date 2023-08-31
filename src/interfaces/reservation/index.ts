import { GuestInterface } from 'interfaces/guest';
import { TableInterface } from 'interfaces/table';
import { GetQueryInterface } from 'interfaces';

export interface ReservationInterface {
  id?: string;
  date: any;
  time: any;
  number_of_guests: number;
  guest_id: string;
  table_id: string;
  created_at?: any;
  updated_at?: any;

  guest?: GuestInterface;
  table?: TableInterface;
  _count?: {};
}

export interface ReservationGetQueryInterface extends GetQueryInterface {
  id?: string;
  guest_id?: string;
  table_id?: string;
}
