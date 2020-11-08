import Page from "../Page"

import { Group, Intend, Collapse } from "../options/Option"
import OptionSlider from "../options/Slider"
import OptionCarousel from "../options/Carousel"
import OptionDropDown from "../options/DropDown"

const resolutionOptions = [
  "1920 x 1080 (60)(*)"
]

const VideoPage = () => {
  return (
    <Page>
      <Group title="nvidia geforce rtx 2080">
        <OptionDropDown 
          title="display mode"
          options={["windowed", "fullscreen", "borderless windowed"]}
        />
        <OptionDropDown
          title="target display"
          options={["best match", "monitor 1", "minotor 2"]}
        />
        <OptionDropDown
          title="resolution"
          options={resolutionOptions}
        />

        <OptionSlider title="field of view" min={80} max={103} default={103} step={1}/>
        <OptionCarousel
          title="aspect ratio"
          options={["16:9", "16:10", "21:9"]}
        />
        <OptionCarousel
          title="vsync"
          options={["off", "on"]}
        />
        <OptionCarousel
          title="triple buffering"
          options={["off", "on"]}
        />
        <OptionCarousel
          title="reduce buffering"
          default={1}
          options={["off", "on"]}
        />
        <OptionCarousel
          title="display performance stats"
          default={1}
          options={["off", "on"]}
        />

        <Collapse title="advanced performance stats">
          <OptionCarousel
            title="show framerate"
            default={1}
            options={["off", "on"]}
          />
          <OptionCarousel
            title="show gpu temperature"
            default={1}
            options={["off", "on"]}
          />
          <OptionCarousel
            title="show vram usage"
            default={1}
            options={["off", "on"]}
          />
          <OptionCarousel
            title="show network latency"
            default={1}
            options={["off", "on"]}
          />
          <OptionCarousel
            title="show network interpolcation delay"
            default={1}
            options={["off", "on"]}
          />
        </Collapse>

        <OptionCarousel
          title="display system clock"
          default={1}
          options={["off", "on"]}
        />
        <OptionDropDown
          title="limit fps"
          default={1}
          options={["custom", "display-based", "30fps"]}
        />
        <OptionSlider title="frame rate cap" min={30} max={400} default={144} step={1}/>
        <OptionDropDown
          title="graphics quality"
          default={4}
          options={["low", "medium", "high", "ultra", "epic"]}
        />

        <Collapse title="advanced">
          <OptionDropDown
            title="render scale"
            default={3}
            options={["automatic - 175%", "50%", "75%", "100%", "150%", "200%"]}
          />
          <OptionDropDown
            title="texture quality"
            default={2}
            options={["low", "medium", "high"]}
          />
          <OptionDropDown
            title="texture filtering quality"
            default={4}
            options={["low - 1x", "medium - 2x", "high - 4x", "ultra - 8x", "epic - 16x"]}
          />
          <OptionDropDown
            title="local fog detail"
            default={3}
            options={["low", "medium", "high", "ultra"]}
          />
          <OptionDropDown
            title="dynamic reflections"
            default={3}
            options={["off", "low", "medium", "high"]}
          />
          <OptionDropDown
            title="shadow detail"
            default={4}
            options={["off", "low", "medium", "high", "ultra"]}
          />
          <OptionDropDown
            title="model detail"
            default={3}
            options={["low", "medium", "high", "ultra"]}
          />
          <OptionDropDown
            title="effects detail"
            default={3}
            options={["low", "medium", "high", "ultra"]}
          />
          <OptionDropDown
            title="lighting quality"
            default={3}
            options={["low", "medium", "high", "ultra"]}
          />
          <OptionDropDown
            title="antialias quality"
            default={4}
            options={["off", "low - fxaa", "medium - smaa low", "high - smaa medium", "ultra - smaa high"]}
          />
          <OptionDropDown
            title="refraction quality"
            default={2}
            options={["low", "medium", "high"]}
          />
          <OptionDropDown
            title="screenshot quality"
            default={4}
            options={["1x resolution", "3x resolution", "5x resolution", "7x resolution", "9x resolution"]}
          />
          <OptionCarousel
            title="local feflections"
            default={1}
            options={["off", "on"]}
          />
          <OptionCarousel
            title="ambient occlusion"
            default={1}
            options={["off", "on"]}
          />
        </Collapse>
      </Group>

      <Group title="">
        <OptionSlider title="gamma correction" min={1} max={100} default={50} step={1}/>
        <OptionSlider title="contrast" min={1} max={100} default={50} step={1}/>
        <OptionSlider title="brightness" min={1} max={100} default={50} step={1}/>
      </Group>
    </Page>
  )
}

export default VideoPage