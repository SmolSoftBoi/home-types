import { Accessory } from './accessory';

/**
 * The smallest subdivision of a home’s space.
 */
export interface Room {
  // Identifying a room

  /**
   * The unique identifier for a room.
   */
  uniqueIdentifier: string;

  // Finding accessories

  /**
   * The collection of accessories in the room.
   */
  accessories: Accessory[];
}
