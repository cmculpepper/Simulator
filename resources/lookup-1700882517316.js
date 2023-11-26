(function(window, undefined) {
  var dictionary = {
    "a65f9482-9904-478a-b9f4-4a6b44dc313a": "Directions List View",
    "d0314569-5853-4fa3-beb2-4059021ce036": "Admin: Directions List",
    "77ebd368-9a5b-493f-a31e-8e09205054cf": "Admin Delete",
    "202792a5-a614-4764-bd38-b32cb40e189b": "Admin: Help Map",
    "7fce3763-4a7d-4ae1-9a53-f32e1c94a589": "Admin: Directions Map",
    "8026d4fa-1a03-43de-a886-0c19082e3ff4": "Admin: NB Sense Map",
    "c3729643-0b80-4a3b-bbc6-87d10d598f98": "Admin: Feedback Map",
    "de36cad1-2a39-4f9b-b3c7-8c063f84fdeb": "Admin Login Map",
    "d268443b-a359-4046-a8ce-86113812620e": "AdminList",
    "b6f39710-56e5-4bef-8a08-0dace15358c8": "List View",
    "760e8704-c42b-478d-9f5a-67acd5c00e4c": "Admin: Feedback List",
    "a6a315e4-d318-4c8a-828d-dc9eaae9e721": "Admin: NB Sense List",
    "270b0a9c-27d8-481c-a7f3-8727357bed2b": "MapPinPopUp",
    "750c03f2-208a-4cb1-aa87-fa26dbecac5c": "Directions Map",
    "d4a7107e-9585-430e-98ad-0768ac48f076": "Admin Mode List",
    "dcc16484-f2cd-4b1a-a1a8-1e8ec7df7faf": "Help List",
    "9600b2a0-c3d3-42ae-bb82-e26c861ef00a": "Admin Delete List",
    "e8a210bd-8265-4ddb-afd0-68aa2facc92c": "Admin: Delete Undo Map",
    "70da1248-3df3-4836-81e2-b53dd40396f8": "Admin foodbox Detals List",
    "a00cca7a-66c7-46e1-92f0-61e441eed827": "List Details",
    "a1ab00f1-880b-41b8-ba3e-73e78e7cfac0": "Admin: Add New Map",
    "86222e75-e0a2-4761-9dc8-57ddf8ad3c40": "Admin Mode Map",
    "c63ce5aa-41a8-4ce2-9181-7cc57c1aa3d1": "Feedback Map",
    "4565c923-1e3c-4f8d-8da7-cdd0db9800fe": "Admin: Help List",
    "a7822e4d-1910-41ea-ba26-3742775421da": "Admin: Food Box Details Map",
    "54dd5d86-98e2-4b31-8e44-9707719d69f3": "Admin Login List",
    "68ba9d82-767c-4cc0-a737-620fff1e465f": "Map",
    "feaf749a-0208-4137-9c1c-80d2868c27b4": "Admin foodbox Add New List",
    "597a0da0-b300-43bb-b4ca-cf2447c7f126": "Admin: Add New Food Box",
    "13ab9c87-c674-4114-abdf-ac61e91fd614": "Admin Delete Undo List",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "OnBoarding",
    "1a1266e8-119a-469f-ad46-3d435381c360": "Feedback List",
    "5f242fc5-488a-4553-9286-027536284fc9": "Help Map",
    "fe9bb004-83e5-4610-bd70-dc4e9655e581": "AdminMap",
    "71f17a94-205d-484b-be72-5278f2ab6886": "Template 1 imported_6",
    "7e618616-013d-47b3-b4df-2ffb4171b7e9": "Template 1 imported_2",
    "a78544af-36b9-4730-8d40-30d0ff59c3d2": "Template 1 imported_3",
    "472a99ba-9d71-40a7-ba28-f35ab2efdb61": "Template 1 imported_5",
    "880c2d47-3d87-4d78-9b91-956c7b1fa6bf": "Template 1 imported",
    "c3552b60-122a-4cab-959c-c6c3d84cb20c": "Template 1 imported_1",
    "0914bbb8-df5f-42ab-be67-179863c3ee57": "Template 1 imported_8",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bc0d3e50-20f5-48cb-b9b8-4324040d44d5": "Template 1 imported_4",
    "8944a812-f462-42ce-a48e-32578916f040": "Template 1 imported_7",
    "9390664e-f8c6-4e34-a9dc-207c897de190": "default imported_8",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default",
    "e196b16e-33e9-4c90-a0e1-16e95920675a": "default imported_6",
    "6994cc82-059d-4cae-8765-6ecd83c3c0a5": "default imported",
    "9a12f187-e15e-48db-870c-4b49de19a3fe": "default imported_3",
    "e2f72401-57c2-4881-8e93-55cd94c8ae9d": "default imported_5",
    "25da5012-e957-4cf5-8d54-d10b9f0a745b": "default imported_2",
    "f4a9d6c9-37e5-42b6-a570-b2a422929a57": "default imported_1",
    "4dcf29c2-5697-4cbe-9c38-17bab1ee082e": "default imported_7",
    "18a74821-0b4f-4240-a21e-43421df3a5fc": "default imported_4"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);