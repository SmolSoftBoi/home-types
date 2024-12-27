import { Accessory } from './accessory';
import { Service } from './service';
import { Zone } from './zone';

/**
 * The primary unit of living space, typically composed of rooms organised into zones.
 */
export interface Home {
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
}
