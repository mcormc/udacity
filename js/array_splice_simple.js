var donuts = ["glazed", "chocolate frosted", "Boston creme", "glazed cruller"];
donuts.splice(1, 1, "chocolate cruller", "creme de leche"); // removes "chocolate frosted" at index 1 and adds "chocolate cruller" and "creme de leche" starting at index 1

// Returns: ["chocolate frosted"]
// donuts array: ["glazed", "chocolate cruller", "creme de leche", "Boston creme", "glazed cruller"]
