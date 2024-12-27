import { Accessory } from './accessory';
import { Service } from './service';

/**
 * The primary unit of living space, typically composed of rooms organised into zones.
 */
export interface Home {
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
