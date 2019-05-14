import React from "react";
import { graphql } from "gatsby";

import Page from "gatsby-theme-timetable/src/pages";
import Timetable from "gatsby-theme-timetable/src/components/Timetable";

const PageIndex = ({ data, location }) => {
  let root = data.allIad2019Yaml.edges[0].node.data;
  let teachers = data.teachers.edges[0].node.data.teachers;
  return (
    <Page location={location} data={data}>
      <Timetable
        semester={root.semester}
        data={root.date}
        teachers={teachers}
        lessions={root.lessions}
      />
    </Page>
  );
};

export const query = graphql`
  query SemesterQuery2020FS {
    site {
      siteMetadata {
        title
        description
        author
        authorUrl
      }
    }
    teachers: allIad2019Yaml(filter: { id: { eq: "IAD2019-teachers" } }) {
      edges {
        node {
          id
          data {
            teachers {
              id
              name
            }
          }
        }
      }
    }

    allIad2019Yaml(filter: { id: { eq: "IAD2019-2020FS" } }) {
      edges {
        node {
          data {
            semester {
              title
              class
              room
              notes
              links {
                title
                href
                class
              }
            }
            lessions {
              id
              title
              color
            }
            date {
              id
              FR {
                morning {
                  teacher
                  lession
                  comment
                }
                afternoon {
                  teacher
                  lession
                  comment
                }
              }
              SA {
                morning {
                  teacher
                  lession
                  comment
                }
                afternoon {
                  teacher
                  lession
                  comment
                }
              }
              week {
                all {
                  teacher
                  lession
                  comment
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default PageIndex;
