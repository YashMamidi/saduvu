var branch;
var year;
// subjects

var cse = {
    y3 : ['DWDM', 'RES', 'DAA','ES', 'AI', 'CN']
}

// content

var CN = {
    u1y : ['4_zSIXb7tLQ', 'uSKdjjw5zow', 'O9IBv5hpn3w', 'vv4y_uOneC0', '2QGgEk20RXM'],
    u2y : [],
    u3y : [],
    u4y : [],
    u5y : [],
    u1d : ['1YQs4r22zp0UBoK_TM15r3zyjWmCjwxlc/preview', '1uvkSxuopaYJZxnbjjLMTTYkT84wWiz5i/preview', '1G7cVXFWPHMq_i6fmR7wV493z6-2nz7LK/preview', '1FFyNbZhljV6mrSC0-kT8Hc0o3Pjzp6O5/preview'],
    u2d : [],
    u3d : [],
    u4d : [],
    u5d : [],
    u1yh : ['Network Types', 'Network Topology', 'Transmission Nodes', 'OSI Model', 'TCP IP Model'],
    u2yh : [],
    u3yh : [],
    u4yh : [],
    u5yh : [],
    u1dh : ['AIM_1', 'AIM_2(a)', 'AIM_2(b)', 'AIM_3'],
    u2dh : [],
    u3dh : [],
    u4dh : [],
    u5dh : []
}

var DWDM ={
    u1y : ['AHR_7jFCMeY', '2ryG3Jy6eIY', 'dGDkT6YdTso', '81bm2OsEzbg', 'xEmrFePGjEg', '3tt-SU14wYU'],
    u2y : ['j0tqUBhs-Nc'],
    u3y : [],
    u4y : [],
    u5y : [],
    u1d : ['1q2ADdCLaSPUQEqHygGBON_E8Iq_-zD49/preview', '1p7NbxTyZqPMWzY70K5fRJMzeAsd6EQPe/preview', '1IvDn_iHzZnqcYKM6uYG4iYmp4oV2w7ht/preview'],
    u2d : [],
    u3d : [],
    u4d : [],
    u5d : [],
    u1yh : ['Data Warehouse', 'OLAP', 'DW Architecture', 'Data mining', 'Types of Data mining ', 'Data mining application'],
    u2yh : ['Data Preprocess'],
    u3yh : [],
    u4yh : [],
    u5yh : [],
    u1dh : ['Syllabus', 'Unit-1', 'Lab Manual'],
    u2dh : [],
    u3dh : [],
    u4dh : [],
    u5dh : []
}

var AI = {
    u1y : ['kmeaG_BQZ7M','fBncbUmO-L4','w1o2lD68-20','RYUBVSjpli8','1D6yubBQjuo' ],
    u2y : [],
    u3y : [],
    u4y : [],
    u5y : [],
    u1d : [],
    u2d : [],
    u3d : [],
    u4d : [],
    u5d : [],
    u1yh : ['Introduction of AI','History of AI','Foundation of AI','Tic-tac-toe','Agents'],
    u2yh : [],
    u3yh : [],
    u4yh : [],
    u5yh : [],
    u1dh : [],
    u2dh : [],
    u3dh : [],
    u4dh : [],
    u5dh : []
}

var RES = {
    u1y : ['WfRkQOjWOlE','MQEiQE_wVMw', '8nJXN6kwyqA', 'PPICpKYnJs0', 'Mz4PMo3XAWI'],
    u2y : ['SN5-DnOHQmE', 'X0OZ6tpZ3Mc'],
    u3y : [],
    u4y : [],
    u5y : [],
    u1d : [],
    u2d : [],
    u3d : [],
    u4d : [],
    u5d : [],
    u1yh : ['Law of conservation of energy', 'RES and Non-RES', 'Solar Power', 'Measurement of Solar Radiation', 'SunShine Recorder'],
    u2yh : ['Green House Effect', 'Photo Voltaic cell'],
    u3yh : [],
    u4yh : [],
    u5yh : [],
    u1dh : [],
    u2dh : [],
    u3dh : [],
    u4dh : [],
    u5dh : []
}


var DAA = {
    u1y : ['cuhLSGGV-1k', 'kRL6hjWOKWI', 'sn1ugY-jzQE', 'A03oI0znAoc', 'DwFAv_yEixY'],
    u2y : ['2Rr2tW9zvRg', 'IXEUEB0djF0'],
    u3y : [],
    u4y : [],
    u5y : [],
    u1d : [],
    u2d : [],
    u3d : [],
    u4d : [],
    u5d : [],
    u1yh : ['Algorithm', 'Debugging', 'Performance Analysis', 'Asymptotic Notations', 'Efficiency Classes'],
    u2yh : ['Divide and conquer', 'General Method'],
    u3yh : [],
    u4yh : [],
    u5yh : [],
    u1dh : [],
    u2dh : [],
    u3dh : [],
    u4dh : [],
    u5dh : []
}

var ES = {
    u1y : ['L0uF8121F-0', 'L0uF8121F-0', 'd6V7dGghPyE', 'qS8mfAX1tAk'],
    u2y : [],
    u3y : [],
    u4y : [],
    u5y : [],
    u1d : [],
    u2d : [],
    u3d : [],
    u4d : [],
    u5d : [],
    u1yh : ['Environment and scope', 'Stock-holm Declaration', 'Rio summit 1992', 'Pollution control'],
    u2yh : [],
    u3yh : [],
    u4yh : [],
    u5yh : [],
    u1dh : [],
    u2dh : [],
    u3dh : [],
    u4dh : [],
    u5dh : []
}