// /pages/api/[slug].js

export default function handler({req, res}:any) {
    const { slug } = req.query; // req.query.slugでslugを取得
    // slugを使って必要なデータを取得したり、処理を行ったりすることができる
    // 例えば、データベースから該当のデータを取得するなど
  
    res.status(200).json({ slug }); // レスポンスとしてslugを返す
  }
  