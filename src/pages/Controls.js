import { useState } from "react"
import Page from "../Page"

import { Group, Intend, Collapse } from "../options/Option"
import OptionSlider from "../options/Slider"
import OptionCarousel from "../options/Carousel"
import OptionDropDown from "../options/DropDown"



const ControlsPage = () => {
  return (
    <Page>
      <Group title="mouse">
        <OptionSlider title="sensitivity" min={0.01} max={100} default={15} step={0.01} precision={2}/>
        <OptionCarousel title="invert look" options={["on", "off"]}/>
      </Group>

      <Group title="controller">
        <OptionSlider title="horizontal sensitivity" min={0} max={100} default={15} step={1}/>
        <OptionSlider title="vertical sensitivity" min={0} max={100} default={15} step={1}/>
      </Group>

      <Group title="reticle">
        <OptionDropDown title="type" options={["default", "circle", "crosshairs", "circle and crosshairs", "dot"]}/>
      </Group>

      <Group title="hero">
        <OptionDropDown title="alliwed health bars" options={["default", "circle", "crosshairs", "circle and crosshairs", "dot"]}/>
        <OptionDropDown title="show friendly outlines" options={["default", "circle", "crosshairs", "circle and crosshairs", "dot"]}/>
      </Group>

      <Group title="movement">
      </Group>
    </Page>
  )
}

export default ControlsPage