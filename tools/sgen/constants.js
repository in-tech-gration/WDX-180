const path = require("node:path");

const SCHEDULE        = "Schedule";
const EXTRA_RESOURCES = "Extra Resources";
const STUDY_PLAN      = "Study Plan";
const SUMMARY         = "Summary";
const EXERCISES       = "Exercises";
const ATTRIBUTIONS    = "Sources and Attributions";

const MODULES_FOLDER  = path.join("curriculum", "modules");
const INCLUDES_FOLDER = path.join("curriculum", "schedule", "includes");

module.exports = {
  SCHEDULE,
  EXTRA_RESOURCES,
  STUDY_PLAN,
  SUMMARY,
  EXERCISES,
  ATTRIBUTIONS,
  MODULES_FOLDER,
  INCLUDES_FOLDER
}