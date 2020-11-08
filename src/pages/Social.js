import Page from "../Page"

import { Group, Intend, Collapse } from "../options/Option"
import OptionSlider from "../options/Slider"
import OptionCarousel from "../options/Carousel"
import OptionDropDown from "../options/DropDown"

const SocialPage = () => {
  return (
    <Page>
      <Group title="text profanity filters">
        <OptionDropDown title="general chat" options={["friendly", "mature", "unfiltered"]}/>
        <OptionDropDown title="match chat" options={["friendly", "mature", "unfiltered"]}/>
        <OptionDropDown title="team chat" options={["friendly", "mature", "unfiltered"]}/>
        <OptionDropDown title="party chat" options={["friendly", "mature", "unfiltered"]}/>
        <OptionDropDown title="whisper" options={["friendly", "mature", "unfiltered"]}/>
      </Group>

      <OptionCarousel title="career profile visibility" options={["private", "group only", "friends only", "public"]}/>
      <OptionCarousel title="group members can invite" options={["on", "off"]}/>
      <OptionCarousel title="open group to" options={["friends", "everyone", "invite only"]}/>
      <OptionCarousel title="custom game members can invite" options={["on", "off"]}/>
      <OptionCarousel title="open custom game to" options={["friends", "everyone", "invite only"]}/>
      <OptionCarousel title="receive group invites from" options={["friends", "anyone"]}/>
      <OptionCarousel title="receive group invite requests" options={["on", "off"]}/>
      <OptionCarousel title="receive whispers" options={["on", "off"]}/>
      <OptionCarousel title="display real ids for friends" options={["on", "off"]}/>
      <OptionCarousel title="display offline friends" options={["on", "off"]}/>
      <OptionCarousel title="display friend request notifications" options={["on", "off"]}/>
      <OptionCarousel title="display friend notifications" options={["on", "off"]}/>
    </Page>
  )
}

export default SocialPage