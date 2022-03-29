'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('vehicles_stations', [
      { id: "70044a1b-cb7f-45b1-a005-c8317908c5bd", vehicle_type: "7d578a5b-2292-4e3c-9728-a8d3f7ae95cc", vehicle_station: "d14042f9-286d-464e-a6e4-b3fee044ddf7", name: "VLCDG 01", createdAt: new Date(), updatedAt: new Date() },
      { id: "7f3c68cc-c320-4ab5-ac74-85bdaf9a8081", vehicle_type: "3f584892-d972-41f7-b331-fd5bf477ee11", vehicle_station: "d14042f9-286d-464e-a6e4-b3fee044ddf7", name: "VLHR 01", createdAt: new Date(), updatedAt: new Date() },
      { id: "e451bfbd-e274-4e9e-bbe9-f77310aebbd7", vehicle_type: "fb38f17b-5bad-4931-9ed9-3a512af47ffd", vehicle_station: "d14042f9-286d-464e-a6e4-b3fee044ddf7", name: "VTULE 01", createdAt: new Date(), updatedAt: new Date() },
      { id: "65ed2d94-7d5f-4af2-bf6f-1820dd8d173e", vehicle_type: "94132784-cf55-44e0-82dc-357943c16d35", vehicle_station: "d14042f9-286d-464e-a6e4-b3fee044ddf7", name: "VTUHR 01", createdAt: new Date(), updatedAt: new Date() },
      { id: "24115ac9-9df7-4437-b3cc-1374ec75877d", vehicle_type: "783fe99b-8883-46a7-9e0b-61e97b87678b", vehicle_station: "d14042f9-286d-464e-a6e4-b3fee044ddf7", name: "VSAV 01", createdAt: new Date(), updatedAt: new Date() },
      { id: "da4355c8-c852-44b0-98c1-6e2bc3f52d6d", vehicle_type: "62eb2db3-f895-4b16-96fc-4ae3b2ac200f", vehicle_station: "d14042f9-286d-464e-a6e4-b3fee044ddf7", name: "CCRF 01", createdAt: new Date(), updatedAt: new Date() },
      { id: "2a4673d4-c184-43ac-8d1a-d35dd42daed3", vehicle_type: "616f248e-519b-4064-86b3-0dd0dde2d161", vehicle_station: "d14042f9-286d-464e-a6e4-b3fee044ddf7", name: "CCF4000 01", createdAt: new Date(), updatedAt: new Date() },
      { id: "d5760bf3-1b32-44c8-900a-d25f99c3d4bd", vehicle_type: "3b8e4e99-9f9d-48d6-9876-1435704f87f2", vehicle_station: "d14042f9-286d-464e-a6e4-b3fee044ddf7", name: "VEPIM 01", createdAt: new Date(), updatedAt: new Date() },
      { id: "0b973870-eea0-4539-8314-c58dd9f27e55", vehicle_type: "c3d9f332-7d1b-41d7-a933-ae24ff31dfa2", vehicle_station: "d778ee8e-3338-4158-bbb5-c34c7884673f", name: "FPTSRT 01", createdAt: new Date(), updatedAt: new Date() },
      { id: "ad70fbef-726c-461f-b738-1595bc115377", vehicle_type: "c3d9f332-7d1b-41d7-a933-ae24ff31dfa2", vehicle_station: "d778ee8e-3338-4158-bbb5-c34c7884673f", name: "FPTSRT 02", createdAt: new Date(), updatedAt: new Date() },
      { id: "4a24a821-bc70-45a8-b9c8-1ce13627806c", vehicle_type: "34ab0c8b-882e-46d5-875a-56025c1d85d8", vehicle_station: "d778ee8e-3338-4158-bbb5-c34c7884673f", name: "EPSA24 01", createdAt: new Date(), updatedAt: new Date() },
      { id: "dad0d9bb-d983-4f22-b1e3-2809d29b98b0", vehicle_type: "616f248e-519b-4064-86b3-0dd0dde2d161", vehicle_station: "d778ee8e-3338-4158-bbb5-c34c7884673f", name: "CCF4000 01", createdAt: new Date(), updatedAt: new Date() },
      { id: "7f4cd2d0-fd20-4c9d-b043-351e5af44f6a", vehicle_type: "783fe99b-8883-46a7-9e0b-61e97b87678b", vehicle_station: "d778ee8e-3338-4158-bbb5-c34c7884673f", name: "VSAV 01", createdAt: new Date(), updatedAt: new Date() },
      { id: "bca701cc-b8ba-4e26-8f04-e62980e52b86", vehicle_type: "783fe99b-8883-46a7-9e0b-61e97b87678b", vehicle_station: "d778ee8e-3338-4158-bbb5-c34c7884673f", name: "VSAV 02", createdAt: new Date(), updatedAt: new Date() },
      { id: "d0740ddb-4a31-47cb-9eb4-42019e85e014", vehicle_type: "94132784-cf55-44e0-82dc-357943c16d35", vehicle_station: "d778ee8e-3338-4158-bbb5-c34c7884673f", name: "VTU 01", createdAt: new Date(), updatedAt: new Date() },
      { id: "38d6d05c-27fc-43a4-8608-0baf9de5f57a", vehicle_type: "421660e9-1a3a-47b6-920c-f3fd44649245", vehicle_station: "d778ee8e-3338-4158-bbb5-c34c7884673f", name: "VFT 01", createdAt: new Date(), updatedAt: new Date() },
      { id: "5b1824fd-94d5-47fb-ada5-7a6a81d98d5d", vehicle_type: "7d578a5b-2292-4e3c-9728-a8d3f7ae95cc", vehicle_station: "d778ee8e-3338-4158-bbb5-c34c7884673f", name: "VLCDG 01", createdAt: new Date(), updatedAt: new Date() },
      { id: "9a8ffa7b-ea34-4b83-a077-e26533bbe4dc", vehicle_type: "3f584892-d972-41f7-b331-fd5bf477ee11", vehicle_station: "d778ee8e-3338-4158-bbb5-c34c7884673f", name: "VLHR 01", createdAt: new Date(), updatedAt: new Date() },
      { id: "ca0deba8-1d60-4531-b0ca-b945f5b36e53", vehicle_type: "fb38f17b-5bad-4931-9ed9-3a512af47ffd", vehicle_station: "d778ee8e-3338-4158-bbb5-c34c7884673f", name: "VTULE 01", createdAt: new Date(), updatedAt: new Date() },
      { id: "9df8ef45-9493-4717-9828-a70afcef1fd1", vehicle_type: "fb38f17b-5bad-4931-9ed9-3a512af47ffd", vehicle_station: "d778ee8e-3338-4158-bbb5-c34c7884673f", name: "VTULE 02", createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('vehicles_stations', null, {});
  }
};
