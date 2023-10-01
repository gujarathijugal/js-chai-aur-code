/*
stack gives a copy like if
x=10 and a=x and a=20
this will not change x as a is copy of x
lis={
    email:"xyz@pmail.com",
    pass:"memfke"
}
lis2=lis
ans if lis2.email="abc@pmail.com"
then lis.email is also equal to "abc@pmail.com"
non prinitve datatypes are stored in heap and we get reference of this values in stack so if we assign the same non primitive value to another variable and change it for another variable then it also changes for original variable

heap->non primitive->ives reference ->changes other variable even if it is accessed by other variable as both have same reference to same pointer
stack->primitive->gives copy->does not change original if accessed through other variable
*/