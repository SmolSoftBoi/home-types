/**
 * A specific characteristic of a service, like the brightness of a dimmable light or its color temperature.
 */
export interface Characteristic {
  // Specifying units

  /**
   * The units of the characteristic value.
   */
  units: string | void;
}
