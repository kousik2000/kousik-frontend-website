import React from "react";
import { TagCloud } from "@frank-mayer/react-tag-cloud";
// same as: import TagCloud from "@frank-mayer/react-tag-cloud"

const Sphere = () => (
  <TagCloud
    options={(w: Window & typeof globalThis): TagCloudOptions => ({
      radius: Math.min(400, w.innerWidth, w.innerHeight) / 2,
      maxSpeed: "fast",
    })}
    onClick={(tag: string, ev: MouseEvent) => alert(tag)}
    onClickOptions={{ passive: true }}
  >
    {[
      "HTML",
      "CSS",
      "JAVASCRIPT",
      "REACT",
      "PYTHON",
      "NODEJS",
      "EXPRESS",
      "MYSQL",
      "FIGMA",
      "ADOBE XD",
      "PHOTOSHOP",
      "THREE JS",
    ]}
  </TagCloud>
);

export default Sphere;
