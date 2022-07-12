'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('vehicle_types', [
      { id: "7d578a5b-2292-4e3c-9728-a8d3f7ae95cc", type: "vlcdg", label: "VLCDG", createdAt: new Date(), updatedAt: new Date() },
      { id: "3f584892-d972-41f7-b331-fd5bf477ee11", type: "vlhr", label: "VLHR", createdAt: new Date(), updatedAt: new Date() },
      { id: "fb38f17b-5bad-4931-9ed9-3a512af47ffd", type: "vl", label: "VL", createdAt: new Date(), updatedAt: new Date() },
      { id: "94132784-cf55-44e0-82dc-357943c16d35", type: "vtu", label: "VTU", createdAt: new Date(), updatedAt: new Date() },
      { id: "783fe99b-8883-46a7-9e0b-61e97b87678b", type: "vsav", label: "VSAV", createdAt: new Date(), updatedAt: new Date() },
      { id: "62eb2db3-f895-4b16-96fc-4ae3b2ac200f", type: "ccrf", label: "CCRF", createdAt: new Date(), updatedAt: new Date() },
      { id: "616f248e-519b-4064-86b3-0dd0dde2d161", type: "ccf4000", label: "CCF4000", createdAt: new Date(), updatedAt: new Date() },
      { id: "3b8e4e99-9f9d-48d6-9876-1435704f87f2", type: "vepim", label: "VEPIM", createdAt: new Date(), updatedAt: new Date() },
      { id: "c3d9f332-7d1b-41d7-a933-ae24ff31dfa2", type: "fptsrt", label: "FPTSRT", createdAt: new Date(), updatedAt: new Date() },
      { id: "34ab0c8b-882e-46d5-875a-56025c1d85d8", type: "epsa24", label: "EPSA24", createdAt: new Date(), updatedAt: new Date() },
      { id: "421660e9-1a3a-47b6-920c-f3fd44649245", type: "vft", label: "VFT", createdAt: new Date(), updatedAt: new Date() },
      { id: "05da847b-cec5-414f-8858-cbec8fc21cd1", type: "vpma10", label: "VPMA 10", createdAt: new Date(), updatedAt: new Date() },
      { id: "2c213056-52a9-4ee8-b72d-1a84df84f57e", type: "vpma40", label: "VPMA 40", createdAt: new Date(), updatedAt: new Date() },
      { id: "2ff05298-8a63-4294-a3b8-d64d06dede7a", type: "vpce", label: "VPCE", createdAt: new Date(), updatedAt: new Date() },
      { id: "f4720f50-d079-4f10-8bc9-fb1f0073348c", type: "cellpma10", label: "CPMA 10", createdAt: new Date(), updatedAt: new Date() },
      { id: "0b60ed5f-5d7c-4043-880f-700753d87eb3", type: "cellpma40", label: "CPMA 40", createdAt: new Date(), updatedAt: new Date() },
      { id: "7a5ff60e-4d0a-4469-814f-85f4f5a966fe", type: "cellceci", label: "CECI", createdAt: new Date(), updatedAt: new Date() },
      { id: "1be8746a-fddb-4b64-9d3d-1b9ed49cde33", type: "cellcepro", label: "CEPRO", createdAt: new Date(), updatedAt: new Date() },
      { id: "e6fb193e-5302-48d3-b759-4bf1966f739e", type: "fpt", label: "FPT", createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('vehicle_types', null, {});
  }
};
