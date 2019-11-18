function repeatedNumber(a)
{
    const len = a.length
    let dup = 1
    a.sort()
    for (let i=1; i<len; i++)
    {
        if(a[i] == a[i-1])
        {
            dup = a[i];
            break;
        }
    }
    return dup;
}
module.exports = repeatedNumber;