<?php 


class ConnDB{
	
	var $dbtype;
	var $host;
    var $user;
    var $pwd;
    var $dbname;
    
	//构造方法
    function ConnDB($dbtype,$host,$user,$pwd,$dbname){
		$this->dbtype=$dbtype;
    	$this->host=$host;
		$this->user=$user;
		$this->pwd=$pwd;
		$this->dbname=$dbname;
	}

    //实现数据库的连接并返回连接对象
    function GetConnId(){
     	
    	if($this->dbtype=="mysql" || $this->dbtype=="mssql"){
    		$dsn="$this->dbtype:host=$this->host;dbname=$this->dbname";
		}else{
			$dsn="$this->dbtype:dbname=$this->dbname";
		}    
		try {
    		$conn = new PDO($dsn, $this->user, $this->pwd); 	//初始化一个PDO对象，就是创建了数据库连接对象$pdo
			$conn->query("set names utf8");
    		return $conn;
		} catch (PDOException $e) {
    		die ("Error!: " . $e->getMessage() . "<br/>");
		}

     	
    }	
}



//数据库管理类
class AdminDB{
	
	
	function ExecSQL($sqlstr,$conn){
		
		$sqltype=strtolower(substr(trim($sqlstr),0,6));
		$rs=$conn->prepare($sqlstr);		//准备查询语句
		$rs->execute();					//执行查询语句，并返回结果集
		if($sqltype=="select"){
			$array=$rs->fetchAll(PDO::FETCH_ASSOC);		//获取结果集中的所有数据
			if(count($array)==0 || $rs==false)
				return false;
			else
				return $array;
		}elseif ($sqltype=="update" || $sqltype=="insert" || $sqltype=="delete"){			
			if($rs)
			    return true;
			else 
			    return false;    
		}
	}
}

class SepPage{
	var $pagesize;
	var $nowpage;
	var $array;
	var $conn;
	var $sqlstr;
	function ShowData($sqlstr,$conn,$pagesize,$nowpage){	//定义方法
		if(!isset($nowpage) || $nowpage=="")			//判断变量值是否为空
			$this->nowpage=1;						//定义每页起始页
		else
			$this->nowpage=$nowpage;
		$this->pagesize=$pagesize;					//定义每页输出的记录数
		$this->conn=$conn;							//连接数据库返回的标识
		$this->sqlstr=$sqlstr;							//执行的查询语句
		$offset=($this->nowpage-1)*$this->pagesize;
		$sql=$this->sqlstr." limit $offset, $this->pagesize";
		$result=$this->conn->prepare($sql);			//准备查询语句
		$result->execute();						//执行查询语句，并返回结果集
		$this->array=$result->fetchAll(PDO::FETCH_ASSOC);		//获取结果集中的所有数据
		if(count($this->array)==0 || $this->array==false)
			return false;
		else
			return $this->array;
	}
	
	function ShowPage($contentname,$utits,$class){
		$res=$this->conn->prepare($this->sqlstr);			//准备查询语句
		$res->execute();						//执行查询语句，并返回结果集
		$this->array=$res->fetchAll(PDO::FETCH_ASSOC);		//获取结果集中的所有数据	
		$record=count($this->array);				//统计记录总数
	
		$pagecount=ceil($record/$this->pagesize);		//计算共有几页
		$strs= "页次: ".$this->nowpage."/".$pagecount."页  ".$contentname." ".$record." ".$utits;
		if($this->nowpage!=1)
			$str="<a href='#/setPage/1'>首页</a>&nbsp;<a href='#/setPage/".($this->nowpage-1)."'>上一页</a>";
		else
			$str="<a href='#/setPage/".($this->nowpage+1)."'>下一页</a>&nbsp;<a href='#/setPage/".$pagecount."'>尾页</a>";		
		if(count($this->array)==0 || $this->array==false)			
			return "无数据！";
		else
			if($class){
				return $strs;
			}else{
				return $str;
			}	
	}
}







$connobj=new ConnDB("mysql","localhost","root","","db_database18");//数据库连接类实例化
$conn=$connobj->GetConnId();    //执行连接操作，返回连接标识
$admindb=new AdminDB();//数据库操作类实例化    
$setpage = new SepPage();
?>