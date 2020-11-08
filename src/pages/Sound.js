import Page from "../Page"

import { Group, Intend, Collapse } from "../options/Option"
import OptionSlider from "../options/Slider"
import OptionCarousel from "../options/Carousel"
import OptionDropDown from "../options/DropDown"

const SoundPage = () => {
  return (
    <Page>
      <OptionSlider title="master volume" min={0} max={100} default={50} step={1}/>
      <Intend>
        <OptionSlider title="sound effects volume" min={0} max={100} default={50} step={1}/>
        <OptionSlider title="music volume" min={0} max={100} default={50} step={1}/>
        <OptionSlider title="in-game voice volume" min={0} max={100} default={50} step={1}/>
      </Intend>
      <OptionSlider title="voice chat volume" min={0} max={100} default={50} step={1}/>
      <OptionSlider title="voice chat mic volume" min={0} max={100} default={50} step={1}/>

      <OptionDropDown title="subtitles" options={["none", "critical gameplay", "critical gameplay + coversations", "everything"]}/>

      <OptionCarousel title="sound plays while in background" options={["on", "off"]}/>
      <OptionCarousel title="group voice chat" options={["on", "auto join", "off"]}/>
      <OptionCarousel title="team voice chat" options={["on", "auto join", "off"]}/>
      <OptionCarousel title="match voice chat" options={["on", "auto join", "off"]}/>
      <OptionCarousel title="voice chat mode" options={["push to talk", "open mic"]}/>
      <OptionCarousel title="voice chat devices" options={["default devices", "comms devices"]}/>
      
      <OptionDropDown title="playback device" options={["default"]}/>
      <OptionCarousel title="dolby atmos for headphones" options={["off", "on"]}/>
    </Page>
  )
}

export default SoundPage