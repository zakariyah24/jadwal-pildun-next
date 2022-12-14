import { match } from "assert";
import React from "react";
import groupBy from "lodash/groupBy";
import moment from "moment";
import SectionRow from "./sectionRow";

export async function getStaticPaths() {
  const res = await fetch(`https://worldcupjson.net/matches`);
  const data = await res.json();
  const match: Match[] = data;

  return match;
}

export default async function SectionList() {
  const matches: Match[] = await getStaticPaths();
  const getMatchDate = (item: Match) =>
    moment(item.datetime).format("YYYY-MM-DD");
  const matchesByDate = groupBy(matches, getMatchDate);

  return (
    <div>
      {Object.keys(matchesByDate).map((date, index) => (
        <div key={index}>
          <SectionRow matches={matchesByDate[date]} date={date} />
        </div>
      ))}
    </div>
  );
}
