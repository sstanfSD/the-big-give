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

const index = () => {
  return (
    <TimelineSection>
      <TimelineContainer>
        <TimelineItemWrapper top={true}>
          <TimelineItem>
            <TimelineItemHeading>2015</TimelineItemHeading>
            <TimelineItemSubheading>
              55 participating Churches in the Ottawa area
            </TimelineItemSubheading>
          </TimelineItem>
          <TimelineItemShadow />
        </TimelineItemWrapper>
        <TimelineItemWrapper left={true}>
          <TimelineItem left={true}>
            <TimelineItemHeading>2016</TimelineItemHeading>
            <TimelineItemSubheading>
              66 participating Churches in the Ottawa area and the surrounding
              communities
            </TimelineItemSubheading>
          </TimelineItem>
          <TimelineItemShadow left={true} />
        </TimelineItemWrapper>
        <TimelineItemWrapper>
          <TimelineItem>
            <TimelineItemHeading>2017</TimelineItemHeading>
            <TimelineItemSubheading>
              92 participating Churches in Ottawa, Arnprior, Toronto (GTA),
              Montreal, Brockville, Cornwall, Sidney BC, Simcoe and other
              communities!
            </TimelineItemSubheading>
          </TimelineItem>
          <TimelineItemShadow />
        </TimelineItemWrapper>
        <TimelineItemWrapper left={true}>
          <TimelineItem left={true}>
            <TimelineItemHeading>2018</TimelineItemHeading>
            <TimelineItemSubheading>
              130 participating Churches in Ottawa, Arnprior, Cobden, Pembroke,
              Toronto (GTA), Montreal, Brockville, Cornwall, Prescott,
              Morrisburg, Perth, Lindsay, Brantford, Brighton, Gatineau,
              Rockland, Pickering, Hamilton, St. Catharines, Sidney BC,
              Charlottetown PEI and many other communities!
            </TimelineItemSubheading>
          </TimelineItem>
          <TimelineItemShadow left={true} />
        </TimelineItemWrapper>
        <TimelineItemWrapper>
          <TimelineItem>
            <TimelineItemHeading>2019</TimelineItemHeading>
            <TimelineItemSubheading>
              137 participating Churches in Ottawa, Arnprior, Cobden, Pembroke,
              Shawville, Lively, Toronto (GTA), Montreal, Brockville, Cornwall,
              Morrisburg, Perth, Almonte, Lindsay, Port Hope, Brantford,
              Burlington, Chatham, Brighton, Gatineau, Alymer, Rockland,
              Pickering, Hamilton, St. Catharines, Sidney BC, Creston BC,
              Charlottetown PEI and many other communities!
            </TimelineItemSubheading>
          </TimelineItem>
          <TimelineItemShadow />
        </TimelineItemWrapper>
        <TimelineItemWrapper left={true}>
          <TimelineItem left={true}>
            <TimelineItemHeading>2022</TimelineItemHeading>
            <TimelineItemSubheading>
              52 participating Churches in Ottawa, Arnprior, Carleton Place,
              Pembroke, Lively, Toronto (GTA), Brockville, Perth, Port Hope,
              Montreal QC, Shawville QC, Sidney BC, Truro NS, Amherst NS and
              many other communities!
            </TimelineItemSubheading>
          </TimelineItem>
          <TimelineItemShadow left={true} />
        </TimelineItemWrapper>
        <TimelineItemWrapper>
          <TimelineItem>
            <TimelineItemHeading>2023</TimelineItemHeading>
            <TimelineItemSubheading>
              With the pandemic behind us, we had 70 churches participate in
              2023. We continue to grow with a few new cities joining us this
              year: Aylmer ON, Sarnia ON and Spencerville ON. We had 42 sites in
              the Ottawa/Ottawa Valley, 6 sites in the GTA, 10 sties in Quebec
              and 12 sites in other Canadian communities.
            </TimelineItemSubheading>
          </TimelineItem>
          <TimelineItemShadow />
        </TimelineItemWrapper>

        <TimelineItemWrapper left={true}>
          <TimelineItem left={true}>
            <TimelineItemHeading>2024</TimelineItemHeading>
            <TimelineItemSubheading>
              In 2024 there were 86 churches who participated in the Big Give
              including three churches in Australia! Another new city was St.
              Stephen, New Brunswick. In the Ottawa/Ottawa Valley we had 46
              churches. In the Greater Toronto Area we have 11 churches. In
              Quebec we had 6 churches. There were 23 churches in the following
              cities: Brockville ON, Port Hope ON, Sarnia ON, Truro NS, Lively
              ON, Sidney BC, Dutton ON, Spencerville ON, Prescott ON, and Aylmer
              ON.
            </TimelineItemSubheading>
          </TimelineItem>
          <TimelineItemShadow left={true} />
        </TimelineItemWrapper>

        <TimelineItemWrapper left={false}>
          <TimelineItem left={false}>
            <TimelineItemHeading>2025</TimelineItemHeading>
            <TimelineItemSubheading>
              In 2025 there were 89 churches who participated in the Big Give
              including five churches in Australia! Two new cities joined us
              this year: Barrie, Ontario with two churches participating and
              Wingham, ON with one church coming on board. We also had our first
              church join us from Red Deer, Alberta. In the Ottawa/Ottawa Valley
              we had 46 churches. In the Greater Toronto Area we have 9
              churches. In Quebec we had 9 churches. There were 25 churches in
              the following cities: Brockville ON, Lyn ON, Johnston, ON, Dutton,
              ON, Port Hope ON, Barrie, ON, Wingham, ON, Lively ON, Sidney BC,
              Red Deer, AB, Dutton ON, Spencerville ON, Prescott ON, and Aylmer
              ON and St. Stephen’s, NB.
            </TimelineItemSubheading>
          </TimelineItem>
          <TimelineItemShadow left={false} />
        </TimelineItemWrapper>

        <TimelineLine />
      </TimelineContainer>
    </TimelineSection>
  )
}

export default index
