
const BidsRow = ({bid}) => {
    const { category, img, job_title, deadline, price_range, email} = bid;
    return (
        <div>
             
              <tr>
                            
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={img} />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{job_title}</div>
                                        <div className="text-sm opacity-50">{category}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                               {email}
                                <br />
                                <span className="badge badge-ghost badge-sm">{deadline}</span>
                            </td>
                            <td>{price_range}</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>
            
        </div>
    );
};

export default BidsRow;