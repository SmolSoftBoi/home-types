import { Accessory } from './accessory';
import { Characteristic } from './characteristic';

/**
 * A controllable feature of an accessory, like a light attached to a garage door opener.
 */
export interface Service {
  // Getting service characteristics

  /**
   * An array of characteristics for the service.
   */
  characteristics: Characteristic[];

  // Identifying the service

  /**
   * The user specified name of the service.
   */
  name: string;

  // Getting the service type

  /**
   * The type of the service.
   */
  serviceType: string;

  // Getting the service's provider

  /**
   * The accessory that provides this service.
   */
  accessory: Accessory | undefined;
}
