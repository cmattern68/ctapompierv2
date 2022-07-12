'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('vehicle_type_jobs', [
      { id: "2006c42c-e363-4e15-989c-137d8a7b4172", vehicle_job: "b12d72c7-70c4-486d-a030-94640328b170", vehicle_type: "7d578a5b-2292-4e3c-9728-a8d3f7ae95cc", createdAt: new Date(), updatedAt: new Date() }, //vlcdg

      { id: "d625b2d2-e36a-471a-8072-3581fde3721b", vehicle_job: "c4d129df-4af6-4d9d-ae1a-7272ed4f00c7", vehicle_type: "3f584892-d972-41f7-b331-fd5bf477ee11", createdAt: new Date(), updatedAt: new Date() }, //vlhr epim 3
      { id: "db476ca5-683b-48ed-8e1f-5a80e61ad68a", vehicle_job: "77dd5df9-9a49-41bf-bc1f-d61b1bef9434", vehicle_type: "3f584892-d972-41f7-b331-fd5bf477ee11", createdAt: new Date(), updatedAt: new Date() }, //vlhr epim 5
      { id: "ffd33f58-3a45-4ef5-91a9-b1d9dc1bbdb2", vehicle_job: "55a32289-03d5-4f92-8fa0-3822700575a3", vehicle_type: "3f584892-d972-41f7-b331-fd5bf477ee11", createdAt: new Date(), updatedAt: new Date() }, //vlhr ps
      { id: "86fc1188-4743-497e-b956-3c864a699821", vehicle_job: "dc087243-648a-4967-8751-a14f1783d31a", vehicle_type: "3f584892-d972-41f7-b331-fd5bf477ee11", createdAt: new Date(), updatedAt: new Date() }, //vlhr vli

      { id: "5e39674a-3f4c-4190-82d6-3a42d5c58a62", vehicle_job: "dc087243-648a-4967-8751-a14f1783d31a", vehicle_type: "fb38f17b-5bad-4931-9ed9-3a512af47ffd", createdAt: new Date(), updatedAt: new Date() }, //vl vli
      { id: "debde100-96d6-477f-9a46-88f6450c9c37", vehicle_job: "55a32289-03d5-4f92-8fa0-3822700575a3", vehicle_type: "fb38f17b-5bad-4931-9ed9-3a512af47ffd", createdAt: new Date(), updatedAt: new Date() }, //vl ps
      { id: "7acaaa95-69c5-461b-bcc7-ea183d0d2850", vehicle_job: "b12d72c7-70c4-486d-a030-94640328b170", vehicle_type: "fb38f17b-5bad-4931-9ed9-3a512af47ffd", createdAt: new Date(), updatedAt: new Date() }, //vl vlcdg

      { id: "eb001bb3-9b42-4b42-82c0-7801d44116f1", vehicle_job: "71adf1a9-db8c-4eab-a06e-dfa67db71a33", vehicle_type: "94132784-cf55-44e0-82dc-357943c16d35", createdAt: new Date(), updatedAt: new Date() }, //vtu
      { id: "fd63b069-3e7e-4c1c-a0ee-c820665da8f1", vehicle_job: "55a32289-03d5-4f92-8fa0-3822700575a3", vehicle_type: "94132784-cf55-44e0-82dc-357943c16d35", createdAt: new Date(), updatedAt: new Date() }, //vtu ps

      { id: "7b99d1c8-c1f3-4974-97e6-3b97c8340425", vehicle_job: "e230f6a0-fa29-49d3-99f5-76ca43434223", vehicle_type: "783fe99b-8883-46a7-9e0b-61e97b87678b", createdAt: new Date(), updatedAt: new Date() }, //vsav

      { id: "4a6b2115-e1dc-4848-8772-0d7963066364", vehicle_job: "7d5399a3-fa88-4c01-bd40-fb6281beb516", vehicle_type: "62eb2db3-f895-4b16-96fc-4ae3b2ac200f", createdAt: new Date(), updatedAt: new Date() }, //ftp6
      { id: "ff4f5ac9-1317-4bd4-8b46-5018d5a80826", vehicle_job: "535d500b-6deb-495d-8070-48a618e7ffb8", vehicle_type: "62eb2db3-f895-4b16-96fc-4ae3b2ac200f", createdAt: new Date(), updatedAt: new Date() }, //fpt4
      { id: "1630e0a0-f736-417b-ad35-2ee478880b13", vehicle_job: "138d850c-c061-453f-b124-17708ef30576", vehicle_type: "62eb2db3-f895-4b16-96fc-4ae3b2ac200f", createdAt: new Date(), updatedAt: new Date() }, //ccrf
      { id: "1058e829-3017-4a3b-b9e0-1349048f1b84", vehicle_job: "43b00cce-990a-4e5d-9af8-619ee1d6daa0", vehicle_type: "62eb2db3-f895-4b16-96fc-4ae3b2ac200f", createdAt: new Date(), updatedAt: new Date() }, //vpi
      { id: "84db7174-77a9-40a6-a340-d49fabd205aa", vehicle_job: "63094d7f-16b1-4bba-98c4-08934f809207", vehicle_type: "62eb2db3-f895-4b16-96fc-4ae3b2ac200f", createdAt: new Date(), updatedAt: new Date() }, //vpi div
      { id: "94188e73-9bf1-41ed-9bdf-b4acf4dfb157", vehicle_job: "fccf92c8-c59e-48dc-b71a-f5e7e0a6e3b8", vehicle_type: "62eb2db3-f895-4b16-96fc-4ae3b2ac200f", createdAt: new Date(), updatedAt: new Date() }, //vpsi

      { id: "9eca4735-46a9-41b5-9d2a-9c80809850ce", vehicle_job: "7d5399a3-fa88-4c01-bd40-fb6281beb516", vehicle_type: "e6fb193e-5302-48d3-b759-4bf1966f739e", createdAt: new Date(), updatedAt: new Date() }, //ftp6
      { id: "0db804ab-817f-4e84-bc03-80538181314f", vehicle_job: "535d500b-6deb-495d-8070-48a618e7ffb8", vehicle_type: "e6fb193e-5302-48d3-b759-4bf1966f739e", createdAt: new Date(), updatedAt: new Date() }, //fpt4
      { id: "160493f7-88ec-4a60-a298-75f7648fdc8c", vehicle_job: "43b00cce-990a-4e5d-9af8-619ee1d6daa0", vehicle_type: "e6fb193e-5302-48d3-b759-4bf1966f739e", createdAt: new Date(), updatedAt: new Date() }, //vpi
      { id: "4477b5de-caf3-4dd9-b3e2-17ac5bed1e22", vehicle_job: "63094d7f-16b1-4bba-98c4-08934f809207", vehicle_type: "e6fb193e-5302-48d3-b759-4bf1966f739e", createdAt: new Date(), updatedAt: new Date() }, //vpi div
      { id: "25a0ba34-508b-4f72-a31b-612921a727ce", vehicle_job: "fccf92c8-c59e-48dc-b71a-f5e7e0a6e3b8", vehicle_type: "e6fb193e-5302-48d3-b759-4bf1966f739e", createdAt: new Date(), updatedAt: new Date() }, //vpsi

      { id: "188a78dc-2451-40a0-887d-a06ab6d94201", vehicle_job: "e5f3fc07-bb29-42a1-a4f6-07c3f12ee991", vehicle_type: "616f248e-519b-4064-86b3-0dd0dde2d161", createdAt: new Date(), updatedAt: new Date() }, //ccf
      { id: "d872f150-13b2-42f7-82f3-ac51ff63022d", vehicle_job: "1e9c6543-530e-4663-8618-e6ade9969339", vehicle_type: "616f248e-519b-4064-86b3-0dd0dde2d161", createdAt: new Date(), updatedAt: new Date() }, //ccf alim
      { id: "d06a1f13-7849-4c36-aa84-efe7a0b52483", vehicle_job: "b44538d6-ac6b-4a19-b916-30c372d47b23", vehicle_type: "616f248e-519b-4064-86b3-0dd0dde2d161", createdAt: new Date(), updatedAt: new Date() }, //ccf div
      { id: "b2cc14a2-a6a5-4447-a083-979f933ba367", vehicle_job: "02359002-b11d-40a5-bc83-84c4b3ce8a96", vehicle_type: "616f248e-519b-4064-86b3-0dd0dde2d161", createdAt: new Date(), updatedAt: new Date() }, //ccgc

      { id: "94705bc5-3a46-40e2-8c5f-70a4aa0296d0", vehicle_job: "69653211-785a-4869-af65-303f5b7d9939", vehicle_type: "3b8e4e99-9f9d-48d6-9876-1435704f87f2", createdAt: new Date(), updatedAt: new Date() }, //vepim

      { id: "c2e9d0d1-a04a-434d-b401-3bf30597bbf6", vehicle_job: "7d5399a3-fa88-4c01-bd40-fb6281beb516", vehicle_type: "c3d9f332-7d1b-41d7-a933-ae24ff31dfa2", createdAt: new Date(), updatedAt: new Date() }, //fpt6
      { id: "6b5dea94-4e6d-4283-b132-763f717d84c4", vehicle_job: "535d500b-6deb-495d-8070-48a618e7ffb8", vehicle_type: "c3d9f332-7d1b-41d7-a933-ae24ff31dfa2", createdAt: new Date(), updatedAt: new Date() }, //fpt4
      { id: "ec6360fd-095e-40c5-b53a-1768a7080c7f", vehicle_job: "f45eea54-aff6-41ff-adb4-5fd5df7024e5", vehicle_type: "c3d9f332-7d1b-41d7-a933-ae24ff31dfa2", createdAt: new Date(), updatedAt: new Date() }, //fptsr6
      { id: "0fafbc21-fb72-4021-a38a-0d17c4269d26", vehicle_job: "5abe154e-9a02-4049-a01b-64f769767a9e", vehicle_type: "c3d9f332-7d1b-41d7-a933-ae24ff31dfa2", createdAt: new Date(), updatedAt: new Date() }, //fptsr4
      { id: "d6d660a5-4345-410f-87b1-4f7d34dfef15", vehicle_job: "e1a2d70e-e022-456d-a5d7-15f8d1ab3842", vehicle_type: "c3d9f332-7d1b-41d7-a933-ae24ff31dfa2", createdAt: new Date(), updatedAt: new Date() }, //fptsrt6
      { id: "837fe6b4-62d4-4e59-849d-9e454715a9db", vehicle_job: "1a3c366b-a4fd-4034-b9e8-41ffe12f6f8a", vehicle_type: "c3d9f332-7d1b-41d7-a933-ae24ff31dfa2", createdAt: new Date(), updatedAt: new Date() }, //fptsrt4
      { id: "71493804-ad91-4694-8558-5e3548eb3d71", vehicle_job: "43b00cce-990a-4e5d-9af8-619ee1d6daa0", vehicle_type: "c3d9f332-7d1b-41d7-a933-ae24ff31dfa2", createdAt: new Date(), updatedAt: new Date() }, //vpi
      { id: "296d7640-afcb-4f5b-b6fd-0ec21347547f", vehicle_job: "63094d7f-16b1-4bba-98c4-08934f809207", vehicle_type: "c3d9f332-7d1b-41d7-a933-ae24ff31dfa2", createdAt: new Date(), updatedAt: new Date()}, //vpi div
      { id: "c0b4c47d-799c-4ed4-a3ed-7a68a7f8ae57", vehicle_job: "fccf92c8-c59e-48dc-b71a-f5e7e0a6e3b8", vehicle_type: "c3d9f332-7d1b-41d7-a933-ae24ff31dfa2", createdAt: new Date(), updatedAt: new Date() }, //vpsi

      { id: "fc21d4ab-970a-4481-90bf-7f3b85da559b", vehicle_job: "b29ba2b6-6144-45a9-9ef1-cb4f4928facc", vehicle_type: "34ab0c8b-882e-46d5-875a-56025c1d85d8", createdAt: new Date(), updatedAt: new Date() }, //epsa24
      { id: "0d187977-5bd5-4c96-a30c-c21905422699", vehicle_job: "b88aad34-d4e2-4c36-92e5-cdd93e24bf61", vehicle_type: "34ab0c8b-882e-46d5-875a-56025c1d85d8", createdAt: new Date(), updatedAt: new Date() }, //epaps

      { id: "2af90ee8-6530-4205-a530-4b7955422d00", vehicle_job: "c4e415e3-e37b-4751-84c8-dada733499cd", vehicle_type: "421660e9-1a3a-47b6-920c-f3fd44649245", createdAt: new Date(), updatedAt: new Date() }, //vft

      { id: "97bc422e-4b98-45df-a83f-d93ff86af007", vehicle_job: "40d1a897-563a-486a-afc1-43c6b65b7b6b", vehicle_type: "05da847b-cec5-414f-8858-cbec8fc21cd1", createdAt: new Date(), updatedAt: new Date() }, //VPMA 10 10

      { id: "22489e4c-b9ba-4cf8-bbf4-b1b1bf2241dd", vehicle_job: "40d1a897-563a-486a-afc1-43c6b65b7b6b", vehicle_type: "2c213056-52a9-4ee8-b72d-1a84df84f57e", createdAt: new Date(), updatedAt: new Date() }, //VPMA 40 10
      { id: "a4580c50-03fd-4d72-8f62-f4b386c147e1", vehicle_job: "14a6b667-097e-48b7-a7e1-032996f58d89", vehicle_type: "2c213056-52a9-4ee8-b72d-1a84df84f57e", createdAt: new Date(), updatedAt: new Date() }, //VPMA 40


      { id: "c860e69d-e5c6-4fe8-ba2a-cf2deb7bd10c", vehicle_job: "2585fd26-eced-4940-9415-d5832aaa0405", vehicle_type: "2ff05298-8a63-4294-a3b8-d64d06dede7a", createdAt: new Date(), updatedAt: new Date() }, //VPCE
      { id: "e6b135c0-5eb9-455a-950c-796f0737d7d4", vehicle_job: "40d1a897-563a-486a-afc1-43c6b65b7b6b", vehicle_type: "f4720f50-d079-4f10-8bc9-fb1f0073348c", createdAt: new Date(), updatedAt: new Date() }, //VPCE PMA 10 10
      { id: "8f6daf14-0f45-4beb-b821-76a5b6837703", vehicle_job: "40d1a897-563a-486a-afc1-43c6b65b7b6b", vehicle_type: "0b60ed5f-5d7c-4043-880f-700753d87eb3", createdAt: new Date(), updatedAt: new Date() }, //VPMA PMA 40 10
      { id: "4067d6e6-a21e-490b-9e74-0f95c9e7a160", vehicle_job: "14a6b667-097e-48b7-a7e1-032996f58d89", vehicle_type: "0b60ed5f-5d7c-4043-880f-700753d87eb3", createdAt: new Date(), updatedAt: new Date() }, //VPMA PMA 40
      { id: "fec8edfb-050b-4646-a452-75be2638a868", vehicle_job: "59968404-2254-4ed6-a704-1a44a881b693", vehicle_type: "7a5ff60e-4d0a-4469-814f-85f4f5a966fe", createdAt: new Date(), updatedAt: new Date() }, //VPCE CECI
      { id: "bc34446a-8611-4f6d-8e90-e9d1a18d79db", vehicle_job: "987ede2c-9c64-4827-8977-1271e1350c2d", vehicle_type: "1be8746a-fddb-4b64-9d3d-1b9ed49cde33", createdAt: new Date(), updatedAt: new Date() }, //VPMA CEPRO

    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('vehicle_type_jobs', null, {});
  }
};
