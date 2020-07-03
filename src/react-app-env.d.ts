// / <reference types="react-scripts" />
interface Planet {
  id: string;
  name: string;
  distanceFromSun: {
    value: number;
    unit: string;
  };
  lengthOfYear: {
    value: number;
    unit: string;
  };
  moons: {
    count: number;
    list: Array<string>;
  };
  description: string;
  equatorialRadius: {
    value: number;
    unit: string;
  };
  surfaceGravity: {
    value: number;
    unit: string;
  };
  equatorialRadius: {
    value: number;
    unit: string;
  };
  atmosphericConstituents?: {
    list: Array<string>;
  };

}
