import * as _ from "lodash";

export type NetworkType = {
  facilities: Facility[];
};

export type Facility = {
  id: string;
  group: string;
  segments: Segment[];
};

export type Segment = {
  id: string;
  ways: number[];
};

export default class Network {
  static listGroups(net: NetworkType): string[] {
    const groups = net.facilities.map((facility) => facility.group);
    return _.uniq(groups);
  }

  static filterFacilities(net: NetworkType, group: string) {
    return net.facilities.filter((facility) => facility.group == group);
  }

  static getFacility(net: NetworkType, facilityId: string): Facility {
    const facility = net.facilities.find(
      (facility) => facility.id === facilityId
    );

    if (!facility) {
      throw new Error();
    } else {
      return facility;
    }
  }
}
