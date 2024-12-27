import { Room } from './room';

/**
 * A collection of rooms that users think of as a single area, like upstairs or downstairs.
 */
export interface Zone {
  // Identifying a zone

  /**
   * The unique identifier for a zone.
   */
  uniqueIdentifier: string;

  // Assigning rooms to a zone

  /**
   * Array of rooms in the zone.
   */
  rooms: Room[];
}
