class Sum(object):

    def __init__(self, init_val=0):
        self.total = init_val

    def __call__(self, n=0):
        tmp_sum = Sum(self.total + n)
        return tmp_sum

    def __eq__(self, other):
        return self.total == other

mysum = Sum()
# print(mysum(1)(2)(3)(4)() == 10)
print(mysum(6) == 6)
