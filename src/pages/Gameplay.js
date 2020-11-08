import Page from "../Page"

import { Group, Intend, Collapse } from "../options/Option"
import OptionSlider from "../options/Slider"
import OptionCarousel from "../options/Carousel"
import OptionDropDown from "../options/DropDown"

const GameplayPage = () => {
  return (
    <Page>
      <OptionCarousel title="always skip kill cam" options={["on", "off"]}/>
      <OptionCarousel title="kill feed display" options={["on", "off"]}/>
      <OptionCarousel title="achievement display" options={["both", "neither", "ui", "chat"]}/>
      <OptionCarousel title="network quality notifications" options={["on", "off"]}/>
      <OptionCarousel title="limit client send rate" options={["on", "off"]}/>
      <OptionCarousel title="limit server send rate" options={["on", "off"]}/>
      <OptionCarousel title="tips display" options={["on", "off"]}/>
      <OptionCarousel title="use simple 3p spectator camera" options={["on", "off"]}/>
      <OptionCarousel title="show capture play of the game ui" options={["on", "off"]}/>
      <OptionCarousel title="overwatch league score spoilers" options={["on", "off"]}/>

      <OptionSlider title="waypoint opacity" min={0} max={100} default={100} step={1}/>
      <OptionSlider title="respawn icon opacity" min={0} max={100} default={100} step={1}/>
      <OptionSlider title="player outline strength" min={0} max={100} default={100} step={1}/>

      <OptionCarousel title="enable voice lines while spectating" options={["on", "off"]}/>
      <OptionCarousel title="enable workshop inspector" options={["on", "off"]}/>
      <OptionCarousel title="enable post match auto queue" options={["on", "off"]}/>
      <OptionCarousel title="enable high precision mouse input" options={["on", "off"]}/>
      <OptionCarousel title="snap death camera to killer" options={["on", "off"]}/>
    </Page>
  )
}

export default GameplayPage