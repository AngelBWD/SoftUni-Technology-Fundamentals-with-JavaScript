function solve(nums) {
    let condesed = [];

    while (nums.length > 1) {
        for (let i = 0; i < nums.length - 1; i++) {
            condesed.push(nums[i] + nums[i + 1]);
        }
        nums = condesed.slice();
        condesed = [];
    }
    console.log(nums[0]);

}
solve([5, 0, 4, 1, 2]);