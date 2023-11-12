const path = require("node:path");

const SCHEDULE        = "Schedule";
const EXTRA_RESOURCES = "Extra Resources";
const STUDY_PLAN      = "Study Plan";
const SUMMARY         = "Summary";
const EXERCISES       = "Exercises";
const ATTRIBUTIONS    = "Sources and Attributions";

const MODULES_FOLDER  = path.join("curriculum", "modules");
const INCLUDES_FOLDER = path.join("curriculum", "schedule", "includes");

const GITHUB_BLOB_URL = "https://github.com/in-tech-gration/WDX-180/blob/main/";

module.exports = {
  ATTRIBUTIONS,
  EXERCISES,
  EXTRA_RESOURCES,
  GITHUB_BLOB_URL,
  INCLUDES_FOLDER,
  MODULES_FOLDER,
  SCHEDULE,
  STUDY_PLAN,
  SUMMARY
}