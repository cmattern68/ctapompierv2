'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('vehicle_type_jobs', [
      { id: "2006c42c-e363-4e15-989c-137d8a7b4172", vehicle_job: "b12d72c7-70c4-486d-a030-94640328b170", vehicle_type: "7d578a5b-2292-4e3c-9728-a8d3f7ae95cc", createdAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)), updatedAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)) }, //vlcdg

      { id: "d625b2d2-e36a-471a-8072-3581fde3721b", vehicle_job: "c4d129df-4af6-4d9d-ae1a-7272ed4f00c7", vehicle_type: "3f584892-d972-41f7-b331-fd5bf477ee11", createdAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)), updatedAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)) }, //vlhr epim 3
      { id: "db476ca5-683b-48ed-8e1f-5a80e61ad68a", vehicle_job: "77dd5df9-9a49-41bf-bc1f-d61b1bef9434", vehicle_type: "3f584892-d972-41f7-b331-fd5bf477ee11", createdAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)), updatedAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)) }, //vlhr epim 5
      { id: "ffd33f58-3a45-4ef5-91a9-b1d9dc1bbdb2", vehicle_job: "55a32289-03d5-4f92-8fa0-3822700575a3", vehicle_type: "3f584892-d972-41f7-b331-fd5bf477ee11", createdAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)), updatedAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)) }, //vlhr ps
      { id: "86fc1188-4743-497e-b956-3c864a699821", vehicle_job: "dc087243-648a-4967-8751-a14f1783d31a", vehicle_type: "3f584892-d972-41f7-b331-fd5bf477ee11", createdAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)), updatedAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)) }, //vlhr vli

      { id: "5e39674a-3f4c-4190-82d6-3a42d5c58a62", vehicle_job: "dc087243-648a-4967-8751-a14f1783d31a", vehicle_type: "fb38f17b-5bad-4931-9ed9-3a512af47ffd", createdAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)), updatedAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)) }, //vl vli
      { id: "debde100-96d6-477f-9a46-88f6450c9c37", vehicle_job: "55a32289-03d5-4f92-8fa0-3822700575a3", vehicle_type: "fb38f17b-5bad-4931-9ed9-3a512af47ffd", createdAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)), updatedAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)) }, //vl ps
      { id: "7acaaa95-69c5-461b-bcc7-ea183d0d2850", vehicle_job: "b12d72c7-70c4-486d-a030-94640328b170", vehicle_type: "fb38f17b-5bad-4931-9ed9-3a512af47ffd", createdAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)), updatedAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)) }, //vl vlcdg

      { id: "eb001bb3-9b42-4b42-82c0-7801d44116f1", vehicle_job: "71adf1a9-db8c-4eab-a06e-dfa67db71a33", vehicle_type: "94132784-cf55-44e0-82dc-357943c16d35", createdAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)), updatedAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)) }, //vtu
      { id: "fd63b069-3e7e-4c1c-a0ee-c820665da8f1", vehicle_job: "55a32289-03d5-4f92-8fa0-3822700575a3", vehicle_type: "94132784-cf55-44e0-82dc-357943c16d35", createdAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)), updatedAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)) }, //vtu ps

      { id: "7b99d1c8-c1f3-4974-97e6-3b97c8340425", vehicle_job: "e230f6a0-fa29-49d3-99f5-76ca43434223", vehicle_type: "783fe99b-8883-46a7-9e0b-61e97b87678b", createdAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)), updatedAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)) }, //vsav

      { id: "ff4f5ac9-1317-4bd4-8b46-5018d5a80826", vehicle_job: "535d500b-6deb-495d-8070-48a618e7ffb8", vehicle_type: "62eb2db3-f895-4b16-96fc-4ae3b2ac200f", createdAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)), updatedAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)) }, //fpt4
      { id: "4a6b2115-e1dc-4848-8772-0d7963066364", vehicle_job: "7d5399a3-fa88-4c01-bd40-fb6281beb516", vehicle_type: "62eb2db3-f895-4b16-96fc-4ae3b2ac200f", createdAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)), updatedAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)) }, //ftp6
      { id: "1630e0a0-f736-417b-ad35-2ee478880b13", vehicle_job: "138d850c-c061-453f-b124-17708ef30576", vehicle_type: "62eb2db3-f895-4b16-96fc-4ae3b2ac200f", createdAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)), updatedAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)) }, //ccrf
      { id: "1058e829-3017-4a3b-b9e0-1349048f1b84", vehicle_job: "43b00cce-990a-4e5d-9af8-619ee1d6daa0", vehicle_type: "62eb2db3-f895-4b16-96fc-4ae3b2ac200f", createdAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)), updatedAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)) }, //vpi
      { id: "84db7174-77a9-40a6-a340-d49fabd205aa", vehicle_job: "63094d7f-16b1-4bba-98c4-08934f809207", vehicle_type: "62eb2db3-f895-4b16-96fc-4ae3b2ac200f", createdAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)), updatedAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)) }, //vpi div
      { id: "94188e73-9bf1-41ed-9bdf-b4acf4dfb157", vehicle_job: "fccf92c8-c59e-48dc-b71a-f5e7e0a6e3b8", vehicle_type: "62eb2db3-f895-4b16-96fc-4ae3b2ac200f", createdAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)), updatedAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)) }, //vpsi

      { id: "188a78dc-2451-40a0-887d-a06ab6d94201", vehicle_job: "e5f3fc07-bb29-42a1-a4f6-07c3f12ee991", vehicle_type: "616f248e-519b-4064-86b3-0dd0dde2d161", createdAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)), updatedAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)) }, //ccf
      { id: "d872f150-13b2-42f7-82f3-ac51ff63022d", vehicle_job: "1e9c6543-530e-4663-8618-e6ade9969339", vehicle_type: "616f248e-519b-4064-86b3-0dd0dde2d161", createdAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)), updatedAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)) }, //ccf alim
      { id: "d06a1f13-7849-4c36-aa84-efe7a0b52483", vehicle_job: "b44538d6-ac6b-4a19-b916-30c372d47b23", vehicle_type: "616f248e-519b-4064-86b3-0dd0dde2d161", createdAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)), updatedAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)) }, //ccf div
      { id: "b2cc14a2-a6a5-4447-a083-979f933ba367", vehicle_job: "02359002-b11d-40a5-bc83-84c4b3ce8a96", vehicle_type: "616f248e-519b-4064-86b3-0dd0dde2d161", createdAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)), updatedAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)) }, //ccgc

      { id: "94705bc5-3a46-40e2-8c5f-70a4aa0296d0", vehicle_job: "69653211-785a-4869-af65-303f5b7d9939", vehicle_type: "3b8e4e99-9f9d-48d6-9876-1435704f87f2", createdAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)), updatedAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)) }, //vepim

      { id: "6b5dea94-4e6d-4283-b132-763f717d84c4", vehicle_job: "535d500b-6deb-495d-8070-48a618e7ffb8", vehicle_type: "c3d9f332-7d1b-41d7-a933-ae24ff31dfa2", createdAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)), updatedAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)) }, //fpt4
      { id: "c2e9d0d1-a04a-434d-b401-3bf30597bbf6", vehicle_job: "7d5399a3-fa88-4c01-bd40-fb6281beb516", vehicle_type: "c3d9f332-7d1b-41d7-a933-ae24ff31dfa2", createdAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)), updatedAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)) }, //fpt6
      { id: "0fafbc21-fb72-4021-a38a-0d17c4269d26", vehicle_job: "5abe154e-9a02-4049-a01b-64f769767a9e", vehicle_type: "c3d9f332-7d1b-41d7-a933-ae24ff31dfa2", createdAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)), updatedAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)) }, //fptsr4
      { id: "ec6360fd-095e-40c5-b53a-1768a7080c7f", vehicle_job: "f45eea54-aff6-41ff-adb4-5fd5df7024e5", vehicle_type: "c3d9f332-7d1b-41d7-a933-ae24ff31dfa2", createdAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)), updatedAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)) }, //fptsr6
      { id: "837fe6b4-62d4-4e59-849d-9e454715a9db", vehicle_job: "1a3c366b-a4fd-4034-b9e8-41ffe12f6f8a", vehicle_type: "c3d9f332-7d1b-41d7-a933-ae24ff31dfa2", createdAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)), updatedAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)) }, //fptsrt4
      { id: "d6d660a5-4345-410f-87b1-4f7d34dfef15", vehicle_job: "e1a2d70e-e022-456d-a5d7-15f8d1ab3842", vehicle_type: "c3d9f332-7d1b-41d7-a933-ae24ff31dfa2", createdAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)), updatedAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)) }, //fptsrt6
      { id: "71493804-ad91-4694-8558-5e3548eb3d71", vehicle_job: "43b00cce-990a-4e5d-9af8-619ee1d6daa0", vehicle_type: "c3d9f332-7d1b-41d7-a933-ae24ff31dfa2", createdAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)), updatedAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)) }, //vpi
      { id: "296d7640-afcb-4f5b-b6fd-0ec21347547f", vehicle_job: "63094d7f-16b1-4bba-98c4-08934f809207", vehicle_type: "c3d9f332-7d1b-41d7-a933-ae24ff31dfa2", createdAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)), updatedAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)) }, //vpi div
      { id: "c0b4c47d-799c-4ed4-a3ed-7a68a7f8ae57", vehicle_job: "fccf92c8-c59e-48dc-b71a-f5e7e0a6e3b8", vehicle_type: "c3d9f332-7d1b-41d7-a933-ae24ff31dfa2", createdAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)), updatedAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)) }, //vpsi

      { id: "fc21d4ab-970a-4481-90bf-7f3b85da559b", vehicle_job: "b29ba2b6-6144-45a9-9ef1-cb4f4928facc", vehicle_type: "34ab0c8b-882e-46d5-875a-56025c1d85d8", createdAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)), updatedAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)) }, //epsa24
      { id: "0d187977-5bd5-4c96-a30c-c21905422699", vehicle_job: "b88aad34-d4e2-4c36-92e5-cdd93e24bf61", vehicle_type: "34ab0c8b-882e-46d5-875a-56025c1d85d8", createdAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)), updatedAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)) }, //epaps

      { id: "2af90ee8-6530-4205-a530-4b7955422d00", vehicle_job: "c4e415e3-e37b-4751-84c8-dada733499cd", vehicle_type: "421660e9-1a3a-47b6-920c-f3fd44649245", createdAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)), updatedAt: new Date((new Date()).setSeconds((new Date).getSeconds() + 1)) }, //vft

    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('vehicle_type_jobs', null, {});
  }
};
