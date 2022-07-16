'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('vehicle_jobs', [
      { id: "b12d72c7-70c4-486d-a030-94640328b170", name: "VLCDG", staff: 1, weight: 15, createdAt: new Date(), updatedAt: new Date() },
      { id: "c4d129df-4af6-4d9d-ae1a-7272ed4f00c7", name: "VLHR EPIM 3", staff: 3, weight: 10,createdAt: new Date(), updatedAt: new Date() },
      { id: "77dd5df9-9a49-41bf-bc1f-d61b1bef9434", name: "VLHR EPIM 5", staff: 5, weight: 0, createdAt: new Date(), updatedAt: new Date() },
      { id: "dc087243-648a-4967-8751-a14f1783d31a", name: "VLI", staff: 1, weight: 20, createdAt: new Date(), updatedAt: new Date() },
      { id: "55a32289-03d5-4f92-8fa0-3822700575a3", name: "PS", staff: 2, weight: 10, createdAt: new Date(), updatedAt: new Date() },
      { id: "71adf1a9-db8c-4eab-a06e-dfa67db71a33", name: "VTU", staff: 2, weight: 0, createdAt: new Date(), updatedAt: new Date() },
      { id: "e230f6a0-fa29-49d3-99f5-76ca43434223", name: "VSAV", staff: 3, weight: 0, createdAt: new Date(), updatedAt: new Date() },
      { id: "535d500b-6deb-495d-8070-48a618e7ffb8", name: "FPT4", staff: 4, weight: 10, createdAt: new Date(), updatedAt: new Date() },
      { id: "7d5399a3-fa88-4c01-bd40-fb6281beb516", name: "FPT6", staff: 6, weight: 0, createdAt: new Date(), updatedAt: new Date() },
      { id: "138d850c-c061-453f-b124-17708ef30576", name: "CCRF", staff: 4, weight: 20, createdAt: new Date(), updatedAt: new Date() },
      { id: "43b00cce-990a-4e5d-9af8-619ee1d6daa0", name: "VPI", staff: 4, weight: 100, createdAt: new Date(), updatedAt: new Date() },
      { id: "63094d7f-16b1-4bba-98c4-08934f809207", name: "VPI DIV", staff: 4, weight: 110, createdAt: new Date(), updatedAt: new Date() },
      { id: "fccf92c8-c59e-48dc-b71a-f5e7e0a6e3b8", name: "VPSI", staff: 4, weight: 120, createdAt: new Date(), updatedAt: new Date() },
      { id: "e5f3fc07-bb29-42a1-a4f6-07c3f12ee991", name: "CCF", staff: 4, weight: 0, createdAt: new Date(), updatedAt: new Date() },
      { id: "1e9c6543-530e-4663-8618-e6ade9969339", name: "CCF ALIM", staff: 4, weight: 10, createdAt: new Date(), updatedAt: new Date() },
      { id: "b44538d6-ac6b-4a19-b916-30c372d47b23", name: "CCF DIV", staff: 4, weight: 20, createdAt: new Date(), updatedAt: new Date() },
      { id: "02359002-b11d-40a5-bc83-84c4b3ce8a96", name: "CCGC", staff: 2, weight: 5, createdAt: new Date(), updatedAt: new Date() },
      { id: "69653211-785a-4869-af65-303f5b7d9939", name: "VEPIM", staff: 4, weight: 0, createdAt: new Date(), updatedAt: new Date() },
      { id: "5abe154e-9a02-4049-a01b-64f769767a9e", name: "FPTSR6", staff: 6, weight: 20, createdAt: new Date(), updatedAt: new Date() },
      { id: "f45eea54-aff6-41ff-adb4-5fd5df7024e5", name: "FPTSR4", staff: 4, weight: 30, createdAt: new Date(), updatedAt: new Date() },
      { id: "1a3c366b-a4fd-4034-b9e8-41ffe12f6f8a", name: "FPTSRT6", staff: 6, weight: 40, createdAt: new Date(), updatedAt: new Date() },
      { id: "e1a2d70e-e022-456d-a5d7-15f8d1ab3842", name: "FPTSRT4", staff: 4, weight: 50, createdAt: new Date(), updatedAt: new Date() },
      { id: "b29ba2b6-6144-45a9-9ef1-cb4f4928facc", name: "EPA", staff: 2, weight: 0, createdAt: new Date(), updatedAt: new Date() },
      { id: "c4e415e3-e37b-4751-84c8-dada733499cd", name: "VFT", staff: 2, weight: 0, createdAt: new Date(), updatedAt: new Date() },

      { id: "40d1a897-563a-486a-afc1-43c6b65b7b6b", name: "PMA 10", staff: 4, weight: 0, createdAt: new Date(), updatedAt: new Date() },
      { id: "14a6b667-097e-48b7-a7e1-032996f58d89", name: "PMA 40", staff: 6, weight: 10, createdAt: new Date(), updatedAt: new Date() },
      { id: "2585fd26-eced-4940-9415-d5832aaa0405", name: "VPCE", staff: 2, weight: 0, createdAt: new Date(), updatedAt: new Date() },
      { id: "59968404-2254-4ed6-a704-1a44a881b693", name: "CECI", staff: 0, weight: 20, createdAt: new Date(), updatedAt: new Date() },
      { id: "987ede2c-9c64-4827-8977-1271e1350c2d", name: "CEPRO", staff: 0, weight: 30, createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('vehicle_jobs', null, {});
  }
};
