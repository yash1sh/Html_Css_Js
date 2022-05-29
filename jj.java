class jj
{
    public static void main(String[] args) {
        
        char [] a={'j','a','v','a','n','p','t','l'};
        char [] copty=new char[9];
        System.arraycopy(a,3,copty,0,9);

        for(String s:args)
            System.out.println(s+args[0]);



    }
}