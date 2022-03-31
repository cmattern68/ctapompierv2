'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('vehicle_types', [
      { id: "7d578a5b-2292-4e3c-9728-a8d3f7ae95cc", type: "vlcdg", label: "VLCDG", createdAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)), updatedAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)) },
      { id: "3f584892-d972-41f7-b331-fd5bf477ee11", type: "vlhr", label: "VLHR", createdAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)), updatedAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)) },
      { id: "fb38f17b-5bad-4931-9ed9-3a512af47ffd", type: "vl", label: "VL", createdAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)), updatedAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)) },
      { id: "94132784-cf55-44e0-82dc-357943c16d35", type: "vtu", label: "VTU", createdAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)), updatedAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)) },
      { id: "783fe99b-8883-46a7-9e0b-61e97b87678b", type: "vsav", label: "VSAV", createdAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)), updatedAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)) },
      { id: "62eb2db3-f895-4b16-96fc-4ae3b2ac200f", type: "ccrf", label: "CCRF", createdAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)), updatedAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)) },
      { id: "616f248e-519b-4064-86b3-0dd0dde2d161", type: "ccf4000", label: "CCF4000", createdAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)), updatedAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)) },
      { id: "3b8e4e99-9f9d-48d6-9876-1435704f87f2", type: "vepim", label: "VEPIM", createdAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)), updatedAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)) },
      { id: "c3d9f332-7d1b-41d7-a933-ae24ff31dfa2", type: "fptsrt", label: "FPTSRT", createdAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)), updatedAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)) },
      { id: "34ab0c8b-882e-46d5-875a-56025c1d85d8", type: "epsa24", label: "EPSA24", createdAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)), updatedAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)) },
      { id: "421660e9-1a3a-47b6-920c-f3fd44649245", type: "vft", label: "VFT", createdAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)), updatedAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)) },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('vehicle_types', null, {});
  }
};
