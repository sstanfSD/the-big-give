import React from "react"

import {
  TimelineSection,
  TimelineContainer,
  TimelineItemWrapper,
  TimelineItem,
  TimelineItemHeading,
  TimelineItemSubheading,
  TimelineItemList,
  TimelineItemListItem,
  TimelineLine,
  TimelineItemShadow,
} from "./TimelineElements"

import { useTranslation } from "gatsby-plugin-react-i18next"

const Timeline = () => {

  const { t } = useTranslation()

  return (
    <TimelineSection>
      <TimelineContainer>
        <TimelineItemWrapper top={true}>
          <TimelineItem>
            <TimelineItemHeading>{t("about.timeline.2015.title")}</TimelineItemHeading>
            <TimelineItemSubheading>
              {t("about.timeline.2015.desc")}
            </TimelineItemSubheading>
          </TimelineItem>
          <TimelineItemShadow />
        </TimelineItemWrapper>
        <TimelineItemWrapper left={true}>
          <TimelineItem left={true}>
            <TimelineItemHeading>2016</TimelineItemHeading>
            <TimelineItemSubheading>
              {t("about.timeline.2016.desc")}
            </TimelineItemSubheading>
          </TimelineItem>
          <TimelineItemShadow left={true} />
        </TimelineItemWrapper>
        <TimelineItemWrapper>
          <TimelineItem>
            <TimelineItemHeading>2017</TimelineItemHeading>
            <TimelineItemSubheading>
              {t("about.timeline.2017.desc")}
            </TimelineItemSubheading>
          </TimelineItem>
          <TimelineItemShadow />
        </TimelineItemWrapper>
        <TimelineItemWrapper left={true}>
          <TimelineItem left={true}>
            <TimelineItemHeading>2018</TimelineItemHeading>
            <TimelineItemSubheading>
              {t("about.timeline.2018.desc")}
            </TimelineItemSubheading>
          </TimelineItem>
          <TimelineItemShadow left={true} />
        </TimelineItemWrapper>
        <TimelineItemWrapper>
          <TimelineItem>
            <TimelineItemHeading>2019</TimelineItemHeading>
            <TimelineItemSubheading>
              {t("about.timeline.2019.desc")}
            </TimelineItemSubheading>
          </TimelineItem>
          <TimelineItemShadow />
        </TimelineItemWrapper>
        <TimelineItemWrapper left={true}>
          <TimelineItem left={true}>
            <TimelineItemHeading>2022</TimelineItemHeading>
            <TimelineItemSubheading>
              {t("about.timeline.2022.desc")}
            </TimelineItemSubheading>
          </TimelineItem>
          <TimelineItemShadow left={true} />
        </TimelineItemWrapper>
        <TimelineItemWrapper>
          <TimelineItem>
            <TimelineItemHeading>2023</TimelineItemHeading>
            <TimelineItemSubheading>
              {t("about.timeline.2023.desc")}
            </TimelineItemSubheading>
          </TimelineItem>
          <TimelineItemShadow />
        </TimelineItemWrapper>

        <TimelineItemWrapper left={true}>
          <TimelineItem left={true}>
            <TimelineItemHeading>2024</TimelineItemHeading>
            <TimelineItemSubheading>
              {t("about.timeline.2024.desc")}
            </TimelineItemSubheading>
          </TimelineItem>
          <TimelineItemShadow left={true} />
        </TimelineItemWrapper>

        <TimelineItemWrapper left={false}>
          <TimelineItem left={false}>
            <TimelineItemHeading>2025</TimelineItemHeading>
            <TimelineItemSubheading>
              {t("about.timeline.2025.desc")}
            </TimelineItemSubheading>
          </TimelineItem>
          <TimelineItemShadow left={false} />
        </TimelineItemWrapper>

        <TimelineLine />
      </TimelineContainer>
    </TimelineSection>
  )
}

export default Timeline
