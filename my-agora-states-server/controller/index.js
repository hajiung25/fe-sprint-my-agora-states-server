const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.send(discussionsData)
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params
    const filtered = discussionsData.filter(e => +id === e.id)
    if(filtered.length !==0){
      res.send(filtered[0])
    }else{
      res.status(404).send('No Data')
    }
  }

};

module.exports = {
  discussionsController,
};
