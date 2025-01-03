/**
 * A specific characteristic of a service, like the brightness of a dimmable light or its color temperature.
 */
export interface Characteristic {
  // Identifying a characteristic

  /**
   * A unique identifier for the characteristic.
   */
  uniqueIdentifier: string;

  /**
   * The localized description of the characteristic.
   */
  localizedDescription: string;

  // Specifying units

  /**
   * The units of the characteristic value.
   */
  units: string | void;
}
