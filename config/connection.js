const mongoose = require('mongoose');

const URI =`mongodb+srv://fpaulina545:mT2I1Vj2DxbDLP4X@2873441.qcqybnj.mongodb.net/Tiendieta`

mongoose.connect(URI);
module.exports = mongoose;
