init = async (county) => {
    initMap();
    let lobby = new Lobby(county);
    await lobby.run();
}