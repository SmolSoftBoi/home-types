import { Accessory } from './accessory';
import { Room } from './room';
import { Service } from './service';
import { User } from './user';
import { Zone } from './zone';

/**
 * The primary unit of living space, typically composed of rooms organised into zones.
 */
export interface Home {
  // Identifying a home

  /**
   * The name the user gives to the home.
   */
  name: string;

  // Dividing a house into rooms

  /**
   * An array of the rooms created and managed by the user.
   */
  rooms: Room[];

  // Grouping rooms into zones

  /**
   * An array of all the zones in the home.
   */
  zones: Zone[];

  // Managing accessories

  /**
   * The collection of accessories that are part of the home.
   */
  accessories: Accessory[];

  // Grouping services

  /**
   * Returns an array of all services provided by accessories in the home that match the specified types.
   *
   * @param serviceTypes An array of strings that identify service types.
   * @returns An array of found services.
   */
  servicesWithTypes(serviceTypes: string[]): Service[];

  // Querying the state of a home

  /**
   * The state of the home.
   */
  state: string;

  // Managing users

  /**
   * The current user.
   */
  currentUser: User;
}
